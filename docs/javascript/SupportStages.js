const supportStagesRoots = document.querySelectorAll("[data-support-stages]");

if (supportStagesRoots.length) {
  const safeJsonParse = (value) => {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.warn("Invalid support stages config JSON", error);
      return null;
    }
  };

  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const sharedStages = {
    home: {
      eyebrow: "Support Stages",
      eyebrowIcon: "fa-solid fa-diagram-project",
      title: "How we support your roofing and cladding project from first contact to completion",
      intro:
        "A clear step-by-step process designed to move your roofing enquiry from early discussion through to completed works and aftercare.",
      stages: [
        { number: "01", title: "Initial Enquiry", text: "Tell us about your building, the roof or cladding issue, and what you need to resolve.", color: "#1f3b6d" },
        { number: "02", title: "Site Visit & Assessment", text: "We assess the roof condition, access needs, and the scope of works required.", color: "#2c528c" },
        { number: "03", title: "Specification & Recommendations", text: "We review defects, materials and site conditions to recommend the best roofing or cladding solution.", color: "#3a74a6" },
        { number: "04", title: "Quotation & Scope Of Works", text: "We provide a clear quotation outlining the recommended works, scope and next steps.", color: "#4a90c2" },
        { number: "05", title: "Planning & Scheduling", text: "We plan and schedule works around your operations, access requirements and site constraints.", color: "#2fa6a0" },
        { number: "06", title: "Preparation & Delivery", text: "Our team carries out the agreed roofing or cladding works to the required specification.", color: "#3bb273" },
        { number: "07", title: "Quality Inspection & Handover", text: "We carry out a full inspection to make sure the works meet specification before handover.", color: "#2f8f5b" },
        { number: "08", title: "Maintenance & Ongoing Support", text: "We remain available for ongoing support and can help with any follow-up roofing issues.", color: "#6b7280" }
      ]
    },
    warehouse: {
      eyebrow: "Support Stages",
      eyebrowIcon: "fa-solid fa-warehouse",
      title: "Warehouse flooring support from first enquiry to completed works",
      intro:
        "A straightforward process built for warehouses, loading bays, aisles and active storage environments.",
      stages: [
        { number: "01", title: "Initial Enquiry", text: "Share your warehouse floor issue, site type and operational priorities.", color: "#2c4a80" },
        { number: "02", title: "Defect Review", text: "We review joints, cracks, potholes, wear or surfacing concerns.", color: "#365b92" },
        { number: "03", title: "Access Planning", text: "We look at aisles, loading zones and practical access around warehouse activity.", color: "#457b9d" },
        { number: "04", title: "Scope & Quote", text: "We prepare the recommended repair or refurbishment scope with pricing.", color: "#4d97b8" },
        { number: "05", title: "Programme", text: "We align timing around your live warehouse operations and site constraints.", color: "#52b69a" },
        { number: "06", title: "Delivery", text: "We complete the agreed warehouse floor repair, surfacing or coating works.", color: "#74a57f" },
        { number: "07", title: "Handover", text: "We review the completed result and confirm readiness for use.", color: "#8ba95a" }
      ]
    },
    vna: {
      eyebrow: "Support Stages",
      eyebrowIcon: "fa-solid fa-ruler-combined",
      title: "VNA flooring support from precision review to completed aisle works",
      intro:
        "A process tailored to very narrow aisle operations, precise flatness requirements and practical remedial planning.",
      stages: [
        { number: "01", title: "Initial Enquiry", text: "Tell us about the VNA environment, travel issues or surface concerns.", color: "#2c4a80" },
        { number: "02", title: "Aisle Review", text: "We review floor defects, ride quality, flatness requirements and aisle condition.", color: "#345f95" },
        { number: "03", title: "Precision Assessment", text: "We shape the right remedial approach for levelling, grinding or repairs.", color: "#3f78a8" },
        { number: "04", title: "Quote & Scope", text: "We prepare a clear proposal for VNA flooring works and required sequencing.", color: "#4a90bb" },
        { number: "05", title: "Operational Planning", text: "We coordinate timing and access around active narrow aisle operations.", color: "#4db6ac" },
        { number: "06", title: "Delivery", text: "We carry out the agreed VNA levelling, repair or surfacing works.", color: "#63a375" },
        { number: "07", title: "Final Review", text: "We review the completed aisle condition and next-step recommendations.", color: "#7a8f56" }
      ]
    },
    industrial: {
      eyebrow: "Support Stages",
      eyebrowIcon: "fa-solid fa-industry",
      title: "Industrial flooring support from first discussion to completed delivery",
      intro:
        "A practical process for factories, production areas, plant rooms and heavy-use industrial environments.",
      stages: [
        { number: "01", title: "Initial Enquiry", text: "Tell us about the floor condition, usage and industrial setting.", color: "#2c4a80" },
        { number: "02", title: "Condition Review", text: "We assess defects, wear patterns and operational demands on the slab.", color: "#365f94" },
        { number: "03", title: "Technical Scope", text: "We define the best repair, resurfacing or coating route for the site.", color: "#4277a6" },
        { number: "04", title: "Quotation", text: "We prepare a clear quotation with recommended works and sequencing.", color: "#4b92b9" },
        { number: "05", title: "Programme", text: "We align the works with production needs, access windows and safety planning.", color: "#4fb3b8" },
        { number: "06", title: "Delivery", text: "We complete the agreed industrial flooring works on site.", color: "#66a06f" },
        { number: "07", title: "Review & Support", text: "We review the result and remain available for future flooring support.", color: "#83995a" }
      ]
    },
    commercial: {
      eyebrow: "Support Stages",
      eyebrowIcon: "fa-solid fa-building",
      title: "Commercial flooring support from enquiry to finished handover",
      intro:
        "A clean, practical process for commercial floor repairs, refurbishment and surface upgrades.",
      stages: [
        { number: "01", title: "Initial Enquiry", text: "Tell us about the floor condition, setting and business needs.", color: "#2c4a80" },
        { number: "02", title: "Project Review", text: "We review defects, wear and the best route for refurbishment or repair.", color: "#355e93" },
        { number: "03", title: "Site Planning", text: "We shape the practical approach around access, occupancy and finish requirements.", color: "#4279a9" },
        { number: "04", title: "Quotation", text: "We prepare the recommended works, pricing and scope.", color: "#4a92bb" },
        { number: "05", title: "Programme", text: "We plan timing to minimise disruption around commercial operations.", color: "#54b6b0" },
        { number: "06", title: "Delivery", text: "We carry out the agreed repair, resurfacing or finishing works.", color: "#6da16f" },
        { number: "07", title: "Completion", text: "We review the finished result and confirm the project handover.", color: "#879c59" }
      ]
    }
  };

  const mergeStage = (baseStage = {}, stageOverride = {}) => ({
    number: stageOverride.number ?? baseStage.number ?? "",
    title: stageOverride.title ?? baseStage.title ?? "",
    text: stageOverride.text ?? baseStage.text ?? "",
    color: stageOverride.color ?? baseStage.color ?? "#2c4a80"
  });

  const buildConfig = (root, sharedConfig) => {
    const rawConfig = root.querySelector("[data-support-stages-config]")?.textContent?.trim();
    const parsedConfig = rawConfig ? safeJsonParse(rawConfig) : null;
    const rawStages = Array.isArray(parsedConfig?.stages) ? parsedConfig.stages.slice(0, 8) : null;
    const mergedStages = rawStages?.length
      ? rawStages.map((stage, index) => mergeStage(sharedConfig.stages[index], stage))
      : sharedConfig.stages;

    return {
      eyebrow: root.dataset.supportEyebrow || parsedConfig?.eyebrow || sharedConfig.eyebrow,
      eyebrowIcon:
        root.dataset.supportEyebrowIcon || parsedConfig?.eyebrowIcon || sharedConfig.eyebrowIcon,
      title: root.dataset.supportTitle || parsedConfig?.title || sharedConfig.title,
      intro: root.dataset.supportIntro || parsedConfig?.intro || sharedConfig.intro,
      stages: mergedStages
    };
  };

  const renderStage = (stage) => `
    <article class="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/95 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-5">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-1.5" style="background:${escapeHtml(
        stage.color
      )}"></div>
      <div class="absolute inset-0 opacity-[0.08]" style="background:linear-gradient(135deg, ${escapeHtml(
        stage.color
      )} 0%, transparent 65%)"></div>
      <div class="relative flex items-start gap-4">
        <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-sm" style="background:${escapeHtml(
          stage.color
        )}">
          <span class="text-sm font-bold">${escapeHtml(stage.number)}</span>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Stage ${escapeHtml(
            stage.number
          )}</p>
          <p class="mt-1 text-base font-semibold leading-tight text-slate-900 sm:text-lg">${escapeHtml(stage.title)}</p>
          <p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">${escapeHtml(stage.text)}</p>
        </div>
      </div>
    </article>
  `;

  const renderSupportStages = (config) => `
    <section class="relative overflow-hidden bg-white py-6 sm:py-10">
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/10 blur-3xl"></div>
        <div class="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#52b69a]/10 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[#2c4a80] shadow-sm">
            <i class="${escapeHtml(config.eyebrowIcon)}"></i>
            <span class="text-sm font-semibold tracking-wide">${escapeHtml(config.eyebrow)}</span>
          </div>
          <h2 class="mt-3 text-2xl font-semibold leading-tight text-slate-900 sm:mt-4 sm:text-4xl">${escapeHtml(config.title)}</h2>
          <p class="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">${escapeHtml(config.intro)}</p>
        </div>

        <div class="mt-7 grid gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
          ${config.stages.map(renderStage).join("")}
        </div>
      </div>
    </section>
  `;

  supportStagesRoots.forEach((root) => {
    const key = root.dataset.supportKey || "home";
    const sharedConfig = sharedStages[key] || sharedStages.home;
    const config = buildConfig(root, sharedConfig);
    root.innerHTML = renderSupportStages(config);
  });
}
