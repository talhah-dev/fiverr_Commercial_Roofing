const servicePartials = document.querySelectorAll("[data-service-partial]");

if (servicePartials.length) {
  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const renderShowcaseCard = (card) => `
    <article class="overflow-hidden rounded-[1.8rem] bg-white border border-slate-200/80 transition hover:-translate-y-1">
      <div class="relative h-[17.5rem] w-full overflow-hidden sm:h-[19rem]">
        <img src="${escapeHtml(card.image)}"
          width="1170" height="780" alt="${escapeHtml(card.alt)}"
          class="absolute inset-0 h-full w-full object-cover" />
        ${card.detailKey ? `
          <button
            type="button"
            class="serviceDetailTrigger absolute left-4 top-4 inline-flex items-center justify-center rounded-lg border border-slate-400 bg-white/95 px-5 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:bg-white"
            data-detail-key="${escapeHtml(card.detailKey)}"
            aria-label="Show more about ${escapeHtml(card.title)}"
          >
            More <i class="fas fa-circle-info fa-lg ml-2 mr-2"></i>
          </button>
        ` : ""}
      </div>
      <div class="border-t border-slate-200/70 bg-white px-4 py-4 sm:px-5 sm:py-5">
        <div class="flex items-start gap-3">
          <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80] sm:h-11 sm:w-11">
            <i class="${escapeHtml(card.icon)}"></i>
          </span>
          <div>
            <p class="text-[1.08rem] font-semibold leading-tight text-slate-900 sm:text-[1.18rem]">${escapeHtml(card.title)}</p>
            <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(card.text)}</p>
          </div>
        </div>
      </div>
    </article>
  `;

  const renderServiceDetailPanel = (config) => {
    if (!config.serviceDetails) return "";

    return `
      <div
        class="serviceDetailPopup pointer-events-none fixed left-0 top-0 z-[90] hidden max-w-[min(92vw,620px)] rounded-[1.8rem] bg-[#1f3b6d] p-6 text-white opacity-0 shadow-2xl transition-all duration-300"
        data-service-detail-panel
        data-default-detail="${escapeHtml(config.defaultDetailKey || "")}"
        aria-hidden="true"
      >
        <button
          type="button"
          class="serviceDetailClose absolute right-12 top-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900 shadow-sm transition hover:bg-slate-100"
          aria-label="Close service details"
        >
          <i class="fa-solid fa-xmark text-xl"></i>
        </button>
        <div class="max-h-[min(78vh,760px)] overflow-y-auto pr-5">
          ${Object.entries(config.serviceDetails).map(([key, detail]) => `
            <article class="serviceDetailItem pr-12 ${key === config.defaultDetailKey ? "" : "hidden"}" data-service-detail="${escapeHtml(key)}">
              <h3 class="text-[2rem] font-semibold leading-tight">${escapeHtml(detail.title)}</h3>
              <p class="mt-6 text-base leading-relaxed text-white/90">${escapeHtml(detail.intro)}</p>

              <ul class="mt-6 space-y-2 text-base leading-relaxed text-white/90">
                ${detail.risks.map((item) => `<li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"></span><span>${escapeHtml(item)}</span></li>`).join("")}
              </ul>

              <p class="mt-8 text-[1.4rem] font-medium leading-tight text-white/95">${escapeHtml(detail.businessTitle)}</p>
              <ul class="mt-5 space-y-2 text-base leading-relaxed text-white/90">
                ${detail.businessRisks.map((item) => `<li class="flex gap-3"><span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white"></span><span>${escapeHtml(item)}</span></li>`).join("")}
              </ul>

              <p class="mt-8 text-[1.4rem] font-medium leading-tight text-white/95">${escapeHtml(detail.servicesTitle)}</p>
              <div class="mt-6 space-y-6">
                ${detail.serviceGroups.map((group) => `
                  <div>
                    <p class="text-[1.35rem] font-semibold leading-tight text-white">${escapeHtml(group.title)}</p>
                    <ul class="mt-3 space-y-2 text-lg leading-relaxed text-white">
                      ${group.items.map((item) => `<li class="flex gap-3"><span class="shrink-0 text-white">✔</span><span>${escapeHtml(item)}</span></li>`).join("")}
                    </ul>
                  </div>
                `).join("")}
              </div>

              <div class="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-lg font-medium text-white">
                ${detail.features.map((item) => `<span class="inline-flex items-center gap-2"><span>☑</span><span>${escapeHtml(item)}</span></span>`).join("")}
              </div>

              <a href="${escapeHtml(detail.ctaHref)}" class="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3b82f6] px-5 py-3 text-lg font-semibold text-white transition hover:brightness-95">
                ${escapeHtml(detail.ctaLabel)} <i class="fas fa-paper-plane ml-2"></i>
              </a>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  };

  const renderFeatureCard = (card) => `
    <div class="${card.fullWidth ? "h-full sm:col-span-2" : "h-full"} rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div class="flex items-start gap-3">
        <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
          <i class="${escapeHtml(card.icon)}"></i>
        </span>
        <div>
          <p class="font-semibold text-slate-900">${escapeHtml(card.title)}</p>
          <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(card.text)}</p>
        </div>
      </div>
    </div>
  `;

  const renderShowcase = (config) => `
    <section ${config.sectionId ? `id="${escapeHtml(config.sectionId)}"` : ""} class="scroll-mt-24 relative overflow-hidden bg-white pb-2 pt-2 sm:pb-4 sm:pt-4">
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#2c4a80]/10 blur-3xl"></div>
        <div class="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/6 blur-3xl"></div>
      </div>

      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-5">
          <div class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[#2c4a80] shadow-sm">
            <i class="${escapeHtml(config.eyebrowIcon)}"></i>
            <span class="text-sm font-semibold tracking-wide">${escapeHtml(config.eyebrowText)}</span>
          </div>
        </div>

        <div class="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-4">
            <h2 class="max-w-md text-3xl font-semibold leading-tight text-slate-900 sm:text-[2.35rem]">${escapeHtml(config.title)}</h2>
            <p class="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">${escapeHtml(config.intro)}</p>

            <div class="mt-6 space-y-4">
              <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                    <i class="${escapeHtml(config.calloutOne.icon)}"></i>
                  </span>
                  <div>
                    <p class="font-semibold text-slate-900">${escapeHtml(config.calloutOne.title)}</p>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(config.calloutOne.text)}</p>
                  </div>
                </div>
              </div>
              <div class="rounded-2xl border border-[#2c4a80]/15 bg-[#2c4a80]/5 p-4">
                <div class="flex items-start gap-3">
                  <span class="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#2c4a80] shadow-sm">
                    <i class="${escapeHtml(config.calloutTwo.icon)}"></i>
                  </span>
                  <div>
                    <p class="font-semibold text-slate-900">${escapeHtml(config.calloutTwo.title)}</p>
                    <p class="mt-1 text-sm leading-relaxed text-slate-600">${escapeHtml(config.calloutTwo.text)}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <a href="${escapeHtml(config.cta.href)}" class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2c4a80] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:bg-[#244070] focus:outline-none focus:ring-2 focus:ring-[#2c4a80]/35 sm:w-auto">
                <i class="${escapeHtml(config.cta.icon)}"></i>
                ${escapeHtml(config.cta.label)}
              </a>
            </div>
          </div>

          <div class="lg:col-span-8">
            <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <div class="relative h-[16rem] w-full sm:h-[19rem] md:h-[24rem]">
                <img src="${escapeHtml(config.hero.image)}" width="1170" height="780" alt="${escapeHtml(config.hero.alt)}" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/10 to-transparent"></div>

                <div class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/12 px-3 py-2 text-white shadow-lg shadow-black/10 backdrop-blur-sm">
                  <i class="${escapeHtml(config.hero.badgeIcon)}"></i>
                  <span class="text-xs font-semibold">${escapeHtml(config.hero.badgeText)}</span>
                </div>
              </div>

              <div class="border-t border-slate-200 bg-white px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
                <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-[0.75rem]">${escapeHtml(config.hero.kicker)}</p>
                <p class="mt-2 max-w-4xl text-[1.5rem] font-semibold leading-tight text-slate-900 sm:text-[2rem] lg:text-[2.35rem]">${escapeHtml(config.hero.title)}</p>
                <p class="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">${escapeHtml(config.hero.text)}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="${escapeHtml(config.cardsSectionId || "")}" class="mt-8 border-t border-slate-200/80 pt-8">
          <div class="relative">
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              ${config.cards.map(renderShowcaseCard).join("")}
            </div>
            ${renderServiceDetailPanel(config)}
          </div>
        </div>
      </div>
    </section>
  `;

  const renderFeature = (config) => `
    <section class="relative pt-10 bg-white pb-12 sm:py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 lg:grid-cols-12 ${escapeHtml(config.alignClass || "lg:items-start")}">
          <div class="lg:col-span-5">
            <div class="flex items-start gap-3">
              <span class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#2c4a80]/10 text-[#2c4a80]">
                <i class="${escapeHtml(config.questionIcon)}"></i>
              </span>
              <div>
                <h2 class="text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl">${escapeHtml(config.title)}</h2>
                <p class="mt-3 text-base leading-relaxed text-slate-600">${escapeHtml(config.intro)}</p>
              </div>
            </div>

            <div class="mt-6 rounded-3xl border border-[#2c4a80]/15 bg-[#2c4a80]/5 p-6">
              <div class="flex items-start gap-3 md:flex-row flex-col">
                <span class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[#2c4a80] shadow-sm">
                  <i class="${escapeHtml(config.callout.icon)}"></i>
                </span>
                <div>
                  <p class="text-lg font-semibold text-slate-900">${escapeHtml(config.callout.title)}</p>
                  <p class="mt-2 text-sm leading-relaxed text-slate-600">${escapeHtml(config.callout.text)}</p>
                </div>
              </div>
            </div>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a href="${escapeHtml(config.cta.href)}" class="inline-flex md:w-auto w-full items-center justify-center gap-2 rounded-xl bg-[#2c4a80] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:bg-[#244070] focus:outline-none focus:ring-2 focus:ring-[#2c4a80]/35">
                ${escapeHtml(config.cta.label)}
                <i class="${escapeHtml(config.cta.icon)} text-xs"></i>
              </a>
            </div>
          </div>

          <aside class="lg:col-span-7">
            <div class="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div class="relative ${escapeHtml(config.hero.heightClass || "h-96")} w-full">
                <img src="${escapeHtml(config.hero.image)}" width="1170" height="780" alt="${escapeHtml(config.hero.alt)}" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>

                <div class="absolute bottom-0 left-0 right-0 p-6">
                  <p class="text-xs font-semibold tracking-widest text-white/80">${escapeHtml(config.hero.kicker)}</p>
                  <p class="mt-2 text-xl font-semibold text-white">${escapeHtml(config.hero.title)}</p>
                  <p class="mt-2 text-sm text-white/85">${escapeHtml(config.hero.text)}</p>
                </div>

                <div class="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-white backdrop-blur">
                  <i class="${escapeHtml(config.hero.badgeIcon)}"></i>
                  <span class="text-xs font-semibold">${escapeHtml(config.hero.badgeText)}</span>
                </div>
              </div>

              <div class="p-6">
                <div class="grid gap-4 sm:grid-cols-2">
                  ${config.cards.map(renderFeatureCard).join("")}
                </div>
              </div>

              <div class="h-1 w-full bg-gradient-to-r from-[#2c4a80] via-[#2c4a80]/60 to-transparent"></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;

  const sharedHelpText = "Since 2013 we have supported UK businesses across logistics, manufacturing, food & drink and pharmaceuticals.";

  const configs = {
    home: {
      variant: "showcase",
      sectionId: "ourservices",
      cardsSectionId: "service-showcase-cards",
      eyebrowIcon: "fa-solid fa-layer-group",
      eyebrowText: "Our Services",
      title: "Commercial Roofing & Cladding Services",
      intro: "We provide a complete range of roofing and cladding solutions for commercial and industrial buildings across the UK.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Need roofing support?",
        text: "Roofing defects can quickly lead to leaks, weather damage and disruption to day-to-day business operations."
      },
      calloutTwo: {
        icon: "fa-solid fa-handshake",
        title: "ATB Roofing & Cladding are here to help",
        text: "We support industrial, commercial and public sector sites with practical roofing and cladding work."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://media.istockphoto.com/id/2246201549/photo/construction-worker-lowering-a-bucket-with-construction-adhesive-from-the-rooftop.jpg?s=612x612&w=0&k=20&c=qR6ZZcbRYZ0YLchJaLmHpT_hqLpq0-stjc5DTBJeeNc=",
        alt: "Commercial roofing and cladding services",
        badgeIcon: "fa-solid fa-layer-group",
        badgeText: "Professional roofing & cladding",
        kicker: "ATB ROOFING & CLADDING",
        title: "Commercial Roofing & Cladding Services",
        text: "Our roofing and cladding services include asbestos roof work, flat roofing, roof replacement, wall cladding, roof repairs and emergency callouts across the UK."
      },
      cards: [
        { image: "https://media.istockphoto.com/id/2220715743/photo/removing-asbestos-for-a-new-roof.jpg?s=612x612&w=0&k=20&c=-Q6XoKUntXk8xWuFc53EOiNDMgkZLAgZ1MWBRccx7to=", alt: "Asbestos roofing services", icon: "fa-solid fa-hard-hat", title: "Asbestos Roofing Services", text: "Safe asbestos roofing surveys, removal and replacement solutions", detailKey: "asbestos-roofing-services" },
        { image: "https://media.istockphoto.com/id/2157073122/photo/aerial-view-of-an-apartment-building-with-flat-roof-in-construction-ballasted-system-with.jpg?s=612x612&w=0&k=20&c=4IIybZ2taalV6R5P_pwqubvQ9F7_b13t7tv2m6jJvzI=", alt: "Flat roofing systems", icon: "fa-solid fa-house-chimney", title: "Flat Roofing Systems", text: "Flat roof installation, renewal and maintenance for commercial sites", detailKey: "flat-roofing-systems" },
        { image: "https://media.istockphoto.com/id/1459217836/photo/new-roof-on-saltbox-colonial-house.jpg?s=612x612&w=0&k=20&c=62Co1I-HPvCj4YkE5cfPOMZbfpcSEqSSYg4n_mOPXnE=", alt: "Roof replacement services", icon: "fa-solid fa-arrows-rotate", title: "Roof Replacement", text: "Full roof replacement works for aging or damaged commercial roofs", detailKey: "roof-replacement" },
        { image: "https://media.istockphoto.com/id/2244926699/photo/construction-worker-seals-the-joints-between-polystyrene-panels-with-adhesive-at-the-height.jpg?s=612x612&w=0&k=20&c=AxVSo3LTMyPNJo1TvQm10LfQ6ZNdru0v-EgVltfuKOM=", alt: "Wall cladding works", icon: "fa-solid fa-layer-group", title: "Wall Cladding Works", text: "Professional wall cladding installation, repair and refurbishment", detailKey: "wall-cladding-works" },
        { image: "https://media.istockphoto.com/id/1172013285/photo/workman-using-pneumatic-nail-gun-install-tile-on-roof-of-new-house-under-construction.jpg?s=612x612&w=0&k=20&c=5-9vPCpGwYoh5ylnswUV0xuFQr4dk3E36I2KhsJQ6M8=", alt: "Roof repair services", icon: "fa-solid fa-screwdriver-wrench", title: "Roof Repairs", text: "Fast roof repairs for leaks, storm damage and general wear", detailKey: "roof-repairs" },
        { image: "https://media.istockphoto.com/id/2222923372/photo/worker-fix-leaking-pipe-in-ceiling-close-up-of-a-stain-on-the-ceiling.jpg?s=612x612&w=0&k=20&c=xrHg_SMtG1G2Xph0vLkvcOBgDvSsj78PJfHvhBBwTlU=", alt: "Emergency roofing services", icon: "fa-solid fa-bolt", title: "Emergency Roofing Services", text: "Rapid response emergency roofing support when urgent issues arise", detailKey: "emergency-roofing-services" }
      ],
      defaultDetailKey: "asbestos-roofing-services",
      serviceDetails: {
        "asbestos-roofing-services": {
          title: "ASBESTOS ROOFING SERVICES",
          intro: "Asbestos roofing requires careful handling, experienced planning and safe removal procedures. We help commercial and industrial sites manage asbestos roof work with minimal disruption.",
          risks: [
            "Asbestos roofing can become hazardous when weathered, damaged or disturbed",
            "Poorly managed removal work can increase risk to occupants and contractors",
            "Leaving deteriorating asbestos roof materials in place can worsen exposure concerns"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Health and safety concerns from damaged asbestos roof materials",
            "Unexpected disruption if roof issues are not addressed promptly",
            "Compliance pressure where older roofing systems require careful management",
            "Higher repair costs if asbestos roof problems are left to worsen",
            "Operational delays caused by weather ingress or inspection findings"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Survey & Planning",
              items: [
                "Assess existing roof conditions",
                "Plan the safest route for removal or replacement"
              ]
            },
            {
              title: "Safe Removal & Replacement",
              items: [
                "Remove asbestos roof materials safely",
                "Replace with suitable modern roofing systems",
                "Keep business disruption to a minimum"
              ]
            }
          ],
          features: ["Safe handling", "Compliance focus", "Minimal disruption"],
          ctaHref: "/#contact",
          ctaLabel: "REQUEST A FREE ROOFING QUOTE"
        },
        "flat-roofing-systems": {
          title: "FLAT ROOFING SYSTEMS",
          intro: "Flat roofing systems need correct specification, careful installation and regular maintenance to stay watertight and reliable in all weather conditions.",
          risks: [
            "Poorly installed flat roofs can develop leaks and standing water issues",
            "Aging flat roofing systems may fail sooner under repeated weather exposure",
            "Incorrect detailing can shorten the life of the roof system"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Water ingress and avoidable internal damage",
            "Higher maintenance costs from recurring leaks",
            "Disruption to staff, stock and building users",
            "Reduced building performance and protection",
            "Unexpected repair costs if problems are left unchecked"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "New Flat Roof Installations",
              items: [
                "Install flat roofing systems for new or refurbished buildings",
                "Specify systems suited to the site and usage"
              ]
            },
            {
              title: "Maintenance & Refurbishment",
              items: [
                "Repair damaged areas and vulnerable details",
                "Improve the lifespan of existing flat roofs",
                "Support ongoing roof care and maintenance"
              ]
            }
          ],
          features: ["Watertight finish", "Reliable performance", "Longer service life"],
          ctaHref: "/#contact",
          ctaLabel: "REQUEST A FREE ROOFING QUOTE"
        },
        "roof-replacement": {
          title: "ROOF REPLACEMENT",
          intro: "When a roof has reached the end of its serviceable life, full replacement is often the most practical way to restore protection, performance and peace of mind.",
          risks: [
            "Old roofs can fail suddenly after prolonged wear or storm damage",
            "Patch repairs may no longer be enough to control leaks and deterioration",
            "Late replacement decisions can increase the risk of internal damage"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Higher disruption if a failing roof is left in place too long",
            "Internal damage from ongoing leaks and water ingress",
            "Reduced building efficiency and protection",
            "Escalating maintenance costs on a deteriorating roof",
            "Unexpected downtime while urgent works are arranged"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Strip Out & Renewal",
              items: [
                "Remove failing roof coverings and prepare the substrate",
                "Renew the roof with a modern system"
              ]
            },
            {
              title: "Project Planning",
              items: [
                "Plan the replacement around site access and operations",
                "Keep the process practical and well managed"
              ]
            }
          ],
          features: ["Complete renewal", "Improved protection", "Better long-term value"],
          ctaHref: "/#contact",
          ctaLabel: "REQUEST A FREE ROOF REPLACEMENT QUOTE"
        },
        "wall-cladding-works": {
          title: "WALL CLADDING WORKS",
          intro: "Wall cladding helps protect the building envelope while improving appearance and weather resistance. We install, repair and refurbish cladding for commercial and industrial properties.",
          risks: [
            "Damaged cladding can allow water ingress and heat loss",
            "Loose or corroded panels can affect the safety and appearance of the building",
            "Aging cladding can reduce the performance of the external envelope"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Reduced weather protection for the building",
            "Poor external presentation for visitors and customers",
            "Ongoing deterioration if damaged panels are not repaired",
            "Higher energy losses if the envelope is compromised",
            "Increased costs from delayed cladding maintenance"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Cladding Installation",
              items: [
                "Install new cladding systems for commercial and industrial buildings",
                "Deliver a clean and durable external finish"
              ]
            },
            {
              title: "Cladding Repairs & Refurbishment",
              items: [
                "Repair damaged cladding panels and fixings",
                "Refurbish tired or weathered wall cladding",
                "Restore performance and presentation"
              ]
            }
          ],
          features: ["Weather protection", "Clean presentation", "Longer service life"],
          ctaHref: "/#contact",
          ctaLabel: "REQUEST A FREE CLADDING QUOTE"
        },
        "roof-repairs": {
          title: "ROOF REPAIRS",
          intro: "Roof repairs help prevent small issues becoming larger failures. We respond quickly to leaks, damaged areas and general wear to keep roofs working as they should.",
          risks: [
            "Small leaks can spread into wider roof damage if left untreated",
            "Storm or impact damage can quickly affect roof performance",
            "Delayed repairs can increase the cost of future work"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Water ingress and property damage",
            "Disruption to operations and building users",
            "Higher repair bills if issues are not handled early",
            "Reduced roof reliability during poor weather",
            "Ongoing maintenance problems across the site"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Leak Tracing & Patch Repairs",
              items: [
                "Identify the source of leaks",
                "Carry out targeted repairs to damaged sections"
              ]
            },
            {
              title: "Preventative Roof Maintenance",
              items: [
                "Tackle issues before they become major failures",
                "Support the long-term condition of the roof"
              ]
            }
          ],
          features: ["Fast response", "Practical repairs", "Reduced downtime"],
          ctaHref: "/#contact",
          ctaLabel: "REQUEST A FREE ROOF REPAIR QUOTE"
        },
        "emergency-roofing-services": {
          title: "EMERGENCY ROOFING SERVICES",
          intro: "When a roofing problem needs urgent attention, fast response matters. We help secure affected areas quickly and reduce the impact of leaks, storm damage or unexpected failures.",
          risks: [
            "Urgent roof damage can lead to immediate water ingress",
            "Temporary exposure can disrupt operations and damage stock",
            "Delays in response can make the problem worse"
          ],
          businessTitle: "THE RISKS TO YOUR BUSINESS",
          businessRisks: [
            "Unplanned downtime and disruption to business operations",
            "Water damage to internal areas and equipment",
            "Safety concerns where roof failures are exposed",
            "Higher costs if emergency action is delayed",
            "Pressure to secure the site quickly and effectively"
          ],
          servicesTitle: "OUR SERVICES",
          serviceGroups: [
            {
              title: "Rapid Callouts",
              items: [
                "Attend urgent roofing issues promptly",
                "Assess the damage and agree immediate next steps"
              ]
            },
            {
              title: "Temporary Weatherproofing",
              items: [
                "Protect the building from further water ingress",
                "Carry out temporary measures before permanent repairs"
              ]
            }
          ],
          features: ["Rapid response", "Site protection", "Reduced disruption"],
          ctaHref: "/#contact",
          ctaLabel: "REQUEST AN EMERGENCY CALL OUT"
        }
      }
    },
    warehouse: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-warehouse",
      eyebrowText: "Warehouse Flooring",
      title: "Warehouse Concrete Floor Repair Services",
      intro: "Warehouse floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day warehouse operations.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Need repair and/or renovation?",
        text: "We support warehouse operators and logistics sites with practical floor repairs, resurfacing and coating works."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: sharedHelpText
      },
      cta: {
        href: "/warehouse-flooring/warehouse-floor-repair-guide/",
        label: "Read Warehouse Floor Repair Guide",
        icon: "fa-solid fa-arrow-right"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Warehouse floor repairs and surfacing",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Warehouse Floor Repair",
        text: "Repairs, surfacing and coatings designed for high-traffic warehouse environments."
      },
      cards: [
        { image: "/docs/assets/img2.jpg", alt: "Warehouse floor joint repairs", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair and stabilisation of damaged joints across busy warehouse slabs and aisles" },
        { image: "/docs/assets/img1.jpg", alt: "Warehouse crack and pothole repairs", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Crack and pothole repairs for hard-working warehouse concrete floors" },
        { image: "/docs/assets/img3.jpg", alt: "Warehouse grinding and cleaning", icon: "fa-solid fa-grip-lines", title: "Grinding & cleaning", text: "Surface grinding and cleaning for worn, dusty and high-traffic warehouse areas" },
        { image: "/docs/assets/img4.jpg", alt: "Warehouse screeds and resin coatings", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Liquid screeds and resin coatings for warehouse refurbishments and overlays" },
        { image: "/docs/assets/img5.jpg", alt: "Warehouse floor painting and markings", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Warehouse floor painting, line marking and pedestrian route demarcation" }
      ]
    },
    industrial: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-industry",
      eyebrowText: "Industrial Flooring",
      title: "Industrial Concrete Floor Repair Services",
      intro: "Industrial floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations in factories and industrial buildings.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Industrial repair & refurbishment",
        text: "Practical repair, resurfacing and coating works for hard-working factories, plants and industrial production areas."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: sharedHelpText
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1744063429626-4f2582172d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Industrial concrete floor repair",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Industrial Floor Repair Services",
        text: "Repairs, resurfacing and coating systems designed for heavy-use industrial and factory environments."
      },
      cards: [
        { image: "/docs/assets/img2.jpg", alt: "Industrial floor joint repairs", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair and stabilisation of damaged joints in factories and industrial concrete slabs" },
        { image: "/docs/assets/img1.jpg", alt: "Industrial crack and pothole repairs", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Industrial crack, pothole and spall repairs for hard-working floor slabs" },
        { image: "/docs/assets/img3.jpg", alt: "Industrial grinding and renovation", icon: "fa-solid fa-grip-lines", title: "Grinding & renovation", text: "Surface grinding, deep cleaning and industrial floor renovation" },
        { image: "/docs/assets/img4.jpg", alt: "Industrial screeds and resin coatings", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Self-levelling screeds and durable epoxy resin coating systems" },
        { image: "/docs/assets/img5.jpg", alt: "Industrial floor painting and markings", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Factory floor painting, safety demarcation and line-marking systems" }
      ]
    },
    commercial: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-building",
      eyebrowText: "Commercial Flooring",
      title: "Commercial Concrete Floor Repair Services",
      intro: "Concrete floor defects can be structurally unsafe, deteriorate rapidly and start to affect your day-to-day business operations.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Commercial repair & refurbishment",
        text: "Repair, resurfacing and renovation works for offices, retail units, commercial buildings and customer-facing interiors."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: sharedHelpText
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1771531072574-af6ed6b954c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Concrete floor repair contractors",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Floor Repair Contractors",
        text: "Repair, resurfacing and renovation solutions designed for busy commercial buildings and customer-facing spaces."
      },
      cards: [
        { image: "/docs/assets/img2.jpg", alt: "Commercial floor joint repairs", icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Joint repair and stabilisation for commercial concrete floors and internal slabs" },
        { image: "/docs/assets/img1.jpg", alt: "Commercial crack and pothole repairs", icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Crack, pothole and defect repairs for busy commercial flooring areas" },
        { image: "/docs/assets/img3.jpg", alt: "Commercial grinding and cleaning", icon: "fa-solid fa-grip-lines", title: "Grinding & cleaning", text: "Surface grinding, cleaning and preparation for refurbished commercial floors" },
        { image: "/docs/assets/img4.jpg", alt: "Commercial screeds and resin coatings", icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Liquid screeds and resin coatings for commercial interiors and workspaces" },
        { image: "/docs/assets/img5.jpg", alt: "Commercial floor painting and markings", icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Commercial floor painting, demarcation and walkway marking solutions" }
      ]
    },
    vna: {
      variant: "showcase",
      eyebrowIcon: "fa-solid fa-ruler-combined",
      eyebrowText: "Super-flat VNA Flooring",
      title: "VNA Warehouse Flooring Services",
      intro: "Very Narrow Aisle environments demand precise flatness and smooth travel routes. Floor defects can increase vibration, slow operations and accelerate wear on equipment.",
      calloutOne: {
        icon: "fa-solid fa-circle-question",
        title: "Precision-led VNA support",
        text: "We help VNA warehouse operators improve floor accuracy, ride quality and long-term aisle performance."
      },
      calloutTwo: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help",
        text: "Since 2013 we have worked with businesses across logistics, manufacturing, food & drink and pharmaceuticals."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "VNA warehouse aisle and floor markings",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Super-flat VNA Flooring",
        text: "Precision levelling, repair and durable finishes designed for VNA truck routes and narrow aisle warehouse operations."
      },
      cards: [
        { image: "/docs/assets/img6.jpg", alt: "Precision levelling for VNA warehouse floors", icon: "fa-solid fa-ruler-combined", title: "Precision levelling", text: "Precision levelling and profiling for VNA travel routes" },
        { image: "/docs/assets/img7.jpg", alt: "Crack and joint repairs for VNA aisles", icon: "fa-solid fa-triangle-exclamation", title: "Crack & joint repairs", text: "Crack, joint and pothole repairs in VNA warehouse aisles" },
        { image: "/docs/assets/img8.jpg", alt: "Grinding and preparation for VNA floors", icon: "fa-solid fa-grip-lines", title: "Grinding & preparation", text: "Surface grinding and preparation to tight tolerances" },
        { image: "/docs/assets/img9.jpg", alt: "Specialist screeds and coatings for VNA floors", icon: "fa-solid fa-fill-drip", title: "Screeds & coatings", text: "Application of specialist screeds and resin coatings" },
        { image: "/docs/assets/img10.jpg", alt: "Line marking and demarcation for VNA operations", icon: "fa-solid fa-road", title: "Line marking & demarcation", text: "Line marking, demarcation and durable aisle finishes for VNA operations" }
      ]
    },
    "warehouse-guide": {
      variant: "feature",
      alignClass: "lg:items-start",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need concrete floor laying & repair services?",
      intro: "Warehouse floor defects can be structurally unsafe, deteriorate rapidly and start to affect your day-to-day warehouse operations.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have worked with businesses across many sectors including logistics, manufacturing, food & drink and pharmaceuticals. We offer a complete range of warehouse concrete floor services, from repairs to defects in the slab (holes, cracks and expansion joints) to surface renovation using specialist resin coatings, screeds and durable paints across England & Wales."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1643894440673-553350d13370?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Warehouse concrete floor repair services",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete Warehouse Floor Repair",
        text: "Repairs, surfacing and coatings designed for high-traffic warehouse environments."
      },
      cards: [
        { icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Filling and stabilisation of damaged concrete floor joints" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Concrete flooring crack and pothole repairs" },
        { icon: "fa-solid fa-broom", title: "Grinding & cleaning", text: "Concrete surface grinding & cleaning" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Application of liquid screeds and epoxy resin floor coatings" },
        { icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory & warehouse floors including markings & walkways", fullWidth: true }
      ]
    },
    "industrial-guide": {
      variant: "feature",
      alignClass: "lg:items-center",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need industrial concrete floor repair services?",
      intro: "Industrial floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations in factories and industrial buildings.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have supported UK businesses across logistics, manufacturing, food & drink and pharmaceuticals. We provide a complete range of industrial floor services, including repairs to cracks, holes and damaged joints, plus surface renovation through specialist coatings, screeds and durable finishes across England & Wales."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1744063429626-4f2582172d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Industrial concrete floor repair",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Industrial Floor Repair Services",
        text: "Repairs, surfacing and coatings designed for heavy-use industrial and factory environments."
      },
      cards: [
        { icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair & stabilisation of damaged concrete floor joints" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Industrial crack, pothole and spall repairs" },
        { icon: "fa-solid fa-grip-lines", title: "Grinding & renovation", text: "Surface grinding, cleaning & renovation" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Self-levelling screeds and epoxy resin coatings" },
        { icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory & warehouse floors including markings & walkways", fullWidth: true }
      ]
    },
    "commercial-guide": {
      variant: "feature",
      alignClass: "lg:items-center",
      questionIcon: "fa-solid fa-circle-question",
      title: "Does your business need commercial concrete floor repair services?",
      intro: "Commercial floor defects can be structurally unsafe, deteriorate rapidly and start to affect day-to-day operations in factories and commercial buildings.",
      callout: {
        icon: "fa-solid fa-life-ring",
        title: "GB Flooring Group are here to help!",
        text: "Since 2013 we have supported UK businesses across logistics, manufacturing, food & drink and pharmaceuticals. We provide a complete range of commercial floor services, including repairs to cracks, holes and damaged joints, plus surface renovation through specialist coatings, screeds and durable finishes across England & Wales."
      },
      cta: {
        href: "/#contact",
        label: "Request a Quote",
        icon: "fa-solid fa-paper-plane"
      },
      hero: {
        image: "https://images.unsplash.com/photo-1744063429626-4f2582172d1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Commercial concrete floor repair",
        badgeIcon: "fa-solid fa-award",
        badgeText: "Since 2013",
        kicker: "GB FLOORING GROUP",
        title: "Concrete floor repair services",
        text: "Repairs, surfacing and coatings designed for heavy-use commercial and factory environments."
      },
      cards: [
        { icon: "fa-solid fa-arrows-left-right-to-line", title: "Floor joint repairs", text: "Repair & stabilisation of damaged concrete floor joints" },
        { icon: "fa-solid fa-triangle-exclamation", title: "Crack & pothole repairs", text: "Commercial crack, pothole and spall repairs" },
        { icon: "fa-solid fa-grip-lines", title: "Grinding & renovation", text: "Surface grinding, cleaning & renovation" },
        { icon: "fa-solid fa-fill-drip", title: "Screeds & resin coatings", text: "Self-levelling screeds and epoxy resin coatings" },
        { icon: "fa-solid fa-paint-roller", title: "Floor painting & markings", text: "Painting of factory & warehouse floors including markings & walkways", fullWidth: true }
      ]
    }
  };

  servicePartials.forEach((root) => {
    const key = root.dataset.serviceKey || "home";
    const config = configs[key];
    if (!config) return;

    root.innerHTML = config.variant === "feature" ? renderFeature(config) : renderShowcase(config);

    const detailPanel = root.querySelector("[data-service-detail-panel]");
    const detailTriggers = Array.from(root.querySelectorAll(".serviceDetailTrigger"));

    if (detailPanel && detailTriggers.length) {
      const detailItems = Array.from(detailPanel.querySelectorAll("[data-service-detail]"));
      const closeDetailBtn = detailPanel.querySelector(".serviceDetailClose");
      let activeDetailKey = "";
      let activeTrigger = null;
      let hideTimer = null;

      const showDetail = (detailKey) => {
        detailItems.forEach((item) => {
          item.classList.toggle("hidden", item.dataset.serviceDetail !== detailKey);
        });
        activeDetailKey = detailKey;
      };

      const positionPopup = (trigger) => {
        if (!trigger || detailPanel.classList.contains("hidden")) return;

        const rect = trigger.getBoundingClientRect();
        const popupRect = detailPanel.getBoundingClientRect();
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

        detailPanel.style.left = `${left}px`;
        detailPanel.style.top = `${top}px`;
      };

      const openPopup = (trigger, detailKey) => {
        if (!detailKey) return;
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }

        showDetail(detailKey);
        activeTrigger = trigger;
        detailPanel.classList.remove("hidden", "pointer-events-none", "opacity-0");
        detailPanel.classList.add("pointer-events-auto", "opacity-100");
        detailPanel.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => positionPopup(trigger));
      };

      const closePopup = () => {
        activeTrigger = null;
        detailPanel.classList.add("pointer-events-none", "opacity-0");
        detailPanel.classList.remove("pointer-events-auto", "opacity-100");
        detailPanel.setAttribute("aria-hidden", "true");
        hideTimer = window.setTimeout(() => {
          detailPanel.classList.add("hidden");
        }, 220);
      };

      const scheduleClose = () => {
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = window.setTimeout(() => {
          closePopup();
        }, 120);
      };

      const defaultDetailKey = detailPanel.dataset.defaultDetail || detailTriggers[0]?.dataset.detailKey;
      if (defaultDetailKey) showDetail(defaultDetailKey);

      detailTriggers.forEach((trigger) => {
        const activateDetail = () => {
          const { detailKey } = trigger.dataset;
          if (!detailKey) return;
          openPopup(trigger, detailKey);
        };

        trigger.addEventListener("mouseenter", activateDetail);
        trigger.addEventListener("focus", activateDetail);
        trigger.addEventListener("click", activateDetail);
        trigger.addEventListener("mouseleave", scheduleClose);
        trigger.addEventListener("blur", scheduleClose);
      });

      detailPanel.addEventListener("mouseenter", () => {
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }
      });

      detailPanel.addEventListener("mouseleave", scheduleClose);

      if (closeDetailBtn) {
        closeDetailBtn.addEventListener("click", () => {
          if (hideTimer) {
            clearTimeout(hideTimer);
            hideTimer = null;
          }
          closePopup();
        });
      }

      window.addEventListener("scroll", () => {
        if (activeTrigger && !detailPanel.classList.contains("hidden")) {
          positionPopup(activeTrigger);
        }
      }, { passive: true });

      window.addEventListener("resize", () => {
        if (activeTrigger && !detailPanel.classList.contains("hidden")) {
          positionPopup(activeTrigger);
        }
      });
    }
  });
}
