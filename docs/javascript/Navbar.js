const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="/#" class="inline-flex items-center gap-3 shrink-0">
          <img src="/docs/assets/logo.svg" height="323" class="h-12" alt="">
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-9 lg:gap-12 text-sm font-semibold">
            <li><a class="navLink transition" href="/#hero">Home</a></li>
            <li><a class="navLink transition" href="/#ourservices">Services</a></li>
            <li><a class="navLink transition" href="/#project">Project</a></li>
            <li><a class="navLink transition" href="/#contact">Contact</a></li>
            <!--
            <li class="relative group">
              <a class="navLink transition" href="/warehouse-flooring/" aria-haspopup="true">
                <span class="inline-flex items-center gap-1">
                  Warehouse Flooring
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-70"></i>
                </span>
              </a>

              <div class="absolute left-0 top-full hidden pt-3 group-hover:block group-focus-within:block">
                <div class="w-80 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-slate-900/10 shadow-xl shadow-slate-900/10 p-2">
                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/warehouse-flooring/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-layer-group"></i>
                    </span>
                    Warehouse Flooring
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/warehouse-flooring/super-flat-vna-flooring/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-ruler-combined"></i>
                    </span>
                    Super-flat VNA Flooring
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/warehouse-flooring/warehouse-floor-repair-guide/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-book-open"></i>
                    </span>
                    Warehouse Floor Repair Guide
                  </a>
                </div>
              </div>
            </li>

            <li class="relative group">
              <a class="navLink transition" href="/industrial-flooring/" aria-haspopup="true">
                <span class="inline-flex items-center gap-1">
                  Industrial Flooring
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-70"></i>
                </span>
              </a>

              <div class="absolute left-0 top-full hidden pt-3 group-hover:block group-focus-within:block">
                <div class="w-80 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-slate-900/10 shadow-xl shadow-slate-900/10 p-2">
                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/industrial-flooring/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-layer-group"></i>
                    </span>
                    Industrial Flooring
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/industrial-flooring/industrial-floor-repair/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-industry"></i>
                    </span>
                    Industrial Floor Repair
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/industrial-flooring/industrial-floor-repair-guide/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-book-open"></i>
                    </span>
                    Industrial Floor Repair Guide
                  </a>
                </div>
              </div>
            </li>

            <li class="relative group">
              <a class="navLink transition" href="/commercial-flooring/" aria-haspopup="true">
                <span class="inline-flex items-center gap-1">
                  Commercial Flooring
                  <i class="fa-solid fa-chevron-down text-[10px] opacity-70"></i>
                </span>
              </a>

              <div class="absolute left-0 top-full hidden pt-3 group-hover:block group-focus-within:block">
                <div class="w-80 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-slate-900/10 shadow-xl shadow-slate-900/10 p-2">
                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/commercial-flooring/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-layer-group"></i>
                    </span>
                    Commercial Flooring
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/commercial-flooring/concrete-floor-repair/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-hammer"></i>
                    </span>
                    Concrete Floor Repair
                  </a>

                  <a class="mt-1 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition" href="/commercial-flooring/concrete-floor-repair-guide/">
                    <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                      <i class="fa-solid fa-book-open"></i>
                    </span>
                    Concrete Floor Repair Guide
                  </a>
                </div>
              </div>
            </li>
            -->
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-2 sm:gap-3 shrink-0">
          <a href="tel:03333449598" class="inline-flex items-center gap-2 rounded-2xl bg-[#2c4a80]/10 px-4 py-2 text-sm font-semibold text-[#2c4a80] ring-1 ring-[#2c4a80]/15 transition hover:bg-[#2c4a80]/15">
            <i class="fa-solid fa-phone"></i>
            <span class="inline-flex h-4 w-6 shrink-0 overflow-hidden rounded-[3px]" aria-hidden="true">
              <svg viewBox="0 0 60 30" class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="60" height="30" fill="#012169"/>
                <path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/>
                <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="4"/>
                <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>
                <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>
              </svg>
            </span>
            0333 344 9598
          </a>

          <a href="/#contact" class="flex items-center gap-2 rounded-2xl pr-4 pl-1.5 py-1.5 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0" id="ctaBtn">
            <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1">
              <i class="fa-solid fa-paper-plane"></i>
            </span>
            <span class="hidden sm:inline">Request a Quote</span>
          </a>
        </div>

        <button
          id="menuBtn"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80] ring-1 ring-[#2c4a80]/20 transition hover:bg-[#2c4a80]/15 active:scale-[0.98] md:hidden"
        >
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-slate-900/35 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed left-0 top-0 z-[70] h-full w-[86%] max-w-sm -translate-x-full bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/10 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5">
      <a href="/#hero" class="inline-flex items-center gap-3 shrink-0">
        <img src="/docs/assets/logo.svg" height="323" class="h-12" alt="">
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-[#2c4a80]/10 hover:text-[#2c4a80] active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5">
      <nav class="mt-2">
        <ul class="space-y-2">
          <li>
            <a class="menuLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/#hero">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-house"></i></span>
              Home
            </a>
          </li>

          <li>
            <a class="menuLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/#ourservices">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-circle-info"></i></span>
              Services
            </a>
          </li>

          <li>
            <a class="menuLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/#project">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-layer-group"></i></span>
              Project
            </a>
          </li>

          <li>
            <a class="menuLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/#contact">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-circle-user"></i></span>
              Contact
            </a>
          </li>

          <!--
          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/warehouse-flooring/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-warehouse"></i></span>
              Warehouse Flooring
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/warehouse-flooring/super-flat-vna-flooring/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-ruler-combined"></i></span>
              Super-flat VNA Flooring
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/warehouse-flooring/warehouse-floor-repair-guide/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-book-open"></i></span>
              Warehouse Floor Repair Guide
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/industrial-flooring/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-industry"></i></span>
              Industrial Flooring
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/industrial-flooring/industrial-floor-repair/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-screwdriver-wrench"></i></span>
              Industrial Floor Repair
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/industrial-flooring/industrial-floor-repair-guide/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-book-open"></i></span>
              Industrial Floor Repair Guide
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/commercial-flooring/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-building"></i></span>
              Commercial Flooring
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/commercial-flooring/concrete-floor-repair/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-hammer"></i></span>
              Concrete Floor Repair
            </a>
          </li>

          <li>
            <a class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-50 transition" href="/commercial-flooring/concrete-floor-repair-guide/">
              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]"><i class="fa-solid fa-book-open"></i></span>
              Concrete Floor Repair Guide
            </a>
          </li>
          -->
        </ul>
      </nav>

      <div class="mt-6 grid gap-2">
        <a href="/#contact" class="menuLink inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2c4a80] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:brightness-95">
          <i class="fa-solid fa-paper-plane"></i>
          Request a Quote
        </a>

        <a href="tel:03333449598" class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 transition hover:bg-slate-50">
          <i class="fa-solid fa-phone text-[#2c4a80]"></i>
          <span class="inline-flex h-4 w-6 shrink-0 overflow-hidden rounded-[3px]" aria-hidden="true">
            <svg viewBox="0 0 60 30" class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="30" fill="#012169"/>
              <path d="M0 0l60 30M60 0L0 30" stroke="#fff" stroke-width="6"/>
              <path d="M0 0l60 30M60 0L0 30" stroke="#C8102E" stroke-width="4"/>
              <path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/>
              <path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/>
            </svg>
          </span>
          0333 344 9598
        </a>
      </div>

      <div class="h-8"></div>
    </div>
  </aside>
`;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const ctaBtn = document.getElementById("ctaBtn");
const brandText = document.getElementById("brandText");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const menuBtn = document.getElementById("menuBtn");

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/70 ring-1 ring-slate-900/10 shadow-lg shadow-slate-900/5 backdrop-blur";
  if (brandText) brandText.className = "hidden sm:inline text-sm font-semibold tracking-wide text-slate-900";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-slate-800 hover:text-[#2c4a80] transition"));
  if (ctaBtn) {
    ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#2c4a80] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2c4a80]/25 active:translate-y-0";
    const ctaIconWrap = ctaBtn.querySelector("span");
    if (ctaIconWrap) ctaIconWrap.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20";
  }
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80] ring-1 ring-[#2c4a80]/20 transition hover:bg-[#2c4a80]/15 active:scale-[0.98] md:hidden";
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-slate-900/10 shadow-lg shadow-slate-900/10 backdrop-blur";
  if (brandText) brandText.className = "hidden sm:inline text-sm font-semibold tracking-wide text-slate-900";
  navLinks.forEach((a) => (a.className = "navLink inline-flex items-center gap-1 text-slate-800 hover:text-[#2c4a80] transition"));
  if (ctaBtn) {
    ctaBtn.className = "inline-flex items-center gap-2 rounded-2xl bg-[#2c4a80] pr-4 pl-1.5 py-1.5 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2c4a80]/25 active:translate-y-0";
    const ctaIconWrap = ctaBtn.querySelector("span");
    if (ctaIconWrap) ctaIconWrap.className = "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20";
  }
  if (menuBtn) menuBtn.className = "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80] ring-1 ring-[#2c4a80]/20 transition hover:bg-[#2c4a80]/15 active:scale-[0.98] md:hidden";
};

const menuBtnEl = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const menuLinks = Array.from(document.querySelectorAll(".menuLink"));

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("-translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("-translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(-100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtnEl) menuBtnEl.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
};

if (menuBtnEl) menuBtnEl.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

const applyNavState = () => {
  const atTop = window.scrollY <= 8;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
applyNavState();
setMenuClosed(true);
