const sectorDetailPanel = document.querySelector("[data-sector-detail-panel]");
const sectorDetailTriggers = Array.from(document.querySelectorAll(".sectorDetailTrigger"));

if (sectorDetailPanel && sectorDetailTriggers.length) {
  const sectorDetailItems = Array.from(sectorDetailPanel.querySelectorAll("[data-sector-detail]"));
  const sectorCloseBtn = sectorDetailPanel.querySelector(".sectorDetailClose");
  let activeTrigger = null;
  let hideTimer = null;

  const showSectorDetail = (detailKey) => {
    sectorDetailItems.forEach((item) => {
      item.classList.toggle("hidden", item.dataset.sectorDetail !== detailKey);
    });
  };

  const positionSectorPopup = (trigger) => {
    if (!trigger || sectorDetailPanel.classList.contains("hidden")) return;

    const rect = trigger.getBoundingClientRect();
    const popupRect = sectorDetailPanel.getBoundingClientRect();
    const gap = 12;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = rect.left;
    let top = rect.bottom + gap;

    if (left + popupRect.width > viewportWidth - 16) {
      left = viewportWidth - popupRect.width - 16;
    }
    if (left < 16) {
      left = 16;
    }

    if (top + popupRect.height > viewportHeight - 16) {
      top = rect.top - popupRect.height - gap;
    }
    if (top < 16) {
      top = 16;
    }

    sectorDetailPanel.style.left = `${left}px`;
    sectorDetailPanel.style.top = `${top}px`;
  };

  const openSectorPopup = (trigger, detailKey) => {
    if (!detailKey) return;
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }

    showSectorDetail(detailKey);
    activeTrigger = trigger;
    sectorDetailPanel.classList.remove("hidden", "pointer-events-none", "opacity-0");
    sectorDetailPanel.classList.add("pointer-events-auto", "opacity-100");
    sectorDetailPanel.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => positionSectorPopup(trigger));
  };

  const closeSectorPopup = () => {
    activeTrigger = null;
    sectorDetailPanel.classList.add("pointer-events-none", "opacity-0");
    sectorDetailPanel.classList.remove("pointer-events-auto", "opacity-100");
    sectorDetailPanel.setAttribute("aria-hidden", "true");
    hideTimer = window.setTimeout(() => {
      sectorDetailPanel.classList.add("hidden");
    }, 220);
  };

  const scheduleSectorClose = () => {
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => {
      closeSectorPopup();
    }, 120);
  };

  sectorDetailTriggers.forEach((trigger) => {
    const activateSectorDetail = () => {
      const { sectorDetailKey } = trigger.dataset;
      if (!sectorDetailKey) return;
      openSectorPopup(trigger, sectorDetailKey);
    };

    trigger.addEventListener("mouseenter", activateSectorDetail);
    trigger.addEventListener("focus", activateSectorDetail);
    trigger.addEventListener("click", activateSectorDetail);
    trigger.addEventListener("mouseleave", scheduleSectorClose);
    trigger.addEventListener("blur", scheduleSectorClose);
  });

  sectorDetailPanel.addEventListener("mouseenter", () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
  });

  sectorDetailPanel.addEventListener("mouseleave", scheduleSectorClose);

  if (sectorCloseBtn) {
    sectorCloseBtn.addEventListener("click", () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      closeSectorPopup();
    });
  }

  window.addEventListener("scroll", () => {
    if (activeTrigger && !sectorDetailPanel.classList.contains("hidden")) {
      positionSectorPopup(activeTrigger);
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (activeTrigger && !sectorDetailPanel.classList.contains("hidden")) {
      positionSectorPopup(activeTrigger);
    }
  });
}
