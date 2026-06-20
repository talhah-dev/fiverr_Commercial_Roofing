const contact = document.getElementById("contact");

if (contact) {
  const escapeHtml = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const getConfigValue = (key, fallback) => {
    const value = contact.dataset[key];
    return value && value.trim() ? value.trim() : fallback;
  };

  const contactConfig = {
    eyebrowIcon: getConfigValue("contactEyebrowIcon", "fa-solid fa-envelope"),
    eyebrow: getConfigValue("contactEyebrow", "Contact"),
    heading: getConfigValue("contactHeading", "Contact Us Now"),
    intro: getConfigValue(
      "contactIntro",
      "Use one of the following contact methods to arrange a free consultation & quotation.",
    ),
    regionIcon: getConfigValue(
      "contactRegionIcon",
      "fa-solid fa-map-location-dot",
    ),
    regionTitle: getConfigValue("contactRegionTitle", "Nationwide service"),
    regionText: getConfigValue(
      "contactRegionText",
      "We work across all regions of England & Wales.",
    ),
    imageBadgeIcon: getConfigValue(
      "contactImageBadgeIcon",
      "fa-solid fa-map-location-dot",
    ),
    imageBadge: getConfigValue("contactImageBadge", "England & Wales"),
    imageKicker: getConfigValue("contactImageKicker", "GB FLOORING GROUP"),
    imageTitle: getConfigValue(
      "contactImageTitle",
      "Concrete floor installation, repairs & coatings",
    ),
    imageText: getConfigValue(
      "contactImageText",
      "Planned support for warehouses, factories and commercial sites nationwide.",
    ),
    imageSrc: getConfigValue("contactImageSrc", "/docs/assets/map.svg"),
    imageAlt: getConfigValue(
      "contactImageAlt",
      "Map of UK flooring coverage regions",
    ),
    formIcon: getConfigValue("contactFormIcon", "fa-solid fa-comment-dots"),
    formTitle: getConfigValue("contactFormTitle", "Complete Our Contact Form"),
    formText: getConfigValue(
      "contactFormText",
      "Please complete and we will be in touch as soon as possible.",
    ),
    regionFieldValue: getConfigValue("contactRegionField", ""),
  };

  contact.innerHTML = `
        <section id="contact" class="scroll-mt-24 relative overflow-hidden bg-white py-8 sm:py-10">
            <div class="absolute inset-0 -z-10">
                <div class="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[#2c4a80]/10 blur-3xl"></div>
                <div class="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#2c4a80]/5 blur-3xl"></div>
            </div>

            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div
                            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-[#2c4a80] shadow-sm">
                            <i class="${escapeHtml(contactConfig.eyebrowIcon)}"></i>
                            <span class="text-sm font-semibold tracking-wide">${escapeHtml(contactConfig.eyebrow)}</span>
                        </div>
                        <h2
                            class="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                            ${escapeHtml(contactConfig.heading)}
                        </h2>
                        <p
                            class="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            ${escapeHtml(contactConfig.intro)}
                        </p>
                    </div>
                </div>

                <div class="mt-10 grid gap-6 lg:grid-cols-12">
                    <div class="min-w-0 lg:col-span-4">
                        <div class="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div class="flex items-start gap-3">
                                <span
                                    class="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                    <i class="fa-solid fa-at"></i>
                                </span>
                                <div class="min-w-0">
                                    <p class="text-sm font-semibold text-slate-900">E-mail Us</p>
                                    <a href="mailto:enquiry@commercialroofingcladding.co.uk"
                                        class="mt-1 flex max-w-full items-start gap-2 text-xs font-medium text-[#2c4a80] hover:underline">
                                        <span class="min-w-0 break-all">enquiry@commercialroofingcladding.co.uk</span>
                                        <i class="fa-solid fa-arrow-up-right-from-square mt-0.5 shrink-0 text-xs"></i>
                                    </a>
                                </div>
                            </div>

                            <div class="mt-5 h-px w-full bg-slate-200"></div>

                            <div class="mt-5 flex items-start gap-3">
                                <span
                                    class="mt-0.5 grid h-11 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                    <i class="fa-solid fa-phone"></i>
                                </span>
                                <div>
                                    <p class="text-sm font-semibold text-slate-900">Call Us</p>
                                    <a href="tel:03333449598"
                                        class="mt-1 inline-flex items-center gap-2 text-sm font-medium text-[#2c4a80] hover:underline">
                                        0333 344 9598
                                        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                    </a>
                                </div>
                            </div>

                            <div data-coverage-group class="mt-6">
                                <div class="rounded-2xl border border-slate-200 bg-white p-4 h-[9rem] overflow-hidden">
                                    <p class="text-sm font-semibold text-slate-900" data-coverage-title>What areas do we cover?</p>
                                    <p class="mt-1 text-sm leading-relaxed text-slate-600" data-coverage-text>We work nationwide with a trusted network of regional professional flooring teams, providing fast response times</p>
                                </div>

                                <div class="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm">
                                    <div class="flex w-full items-center justify-center overflow-hidden rounded-[1.35rem] bg-white p-2">
                                        <div class="relative mx-auto w-full max-w-[25rem] scale-[1.02] origin-center">
                                            <img src="${escapeHtml(contactConfig.imageSrc)}"
                                                width="1172" height="781"
                                                alt="${escapeHtml(contactConfig.imageAlt)}"
                                                class="mx-auto h-auto w-full" loading="lazy" decoding="async" />

                                            <button type="button"
                                            class="group absolute left-[52%] top-[55%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="north-west" aria-label="North West">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">
                                                We work across the North West of England
                                            </span>

                                        </button>

                                        <button type="button"
                                            class="group absolute left-[64%] top-[53%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="north-east" aria-label="North East">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">
                                                We work across the North East of England
                                            </span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[45%] top-[38%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="scotland" aria-label="Scotland">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">
                                                We work across the central belt of Scotland
                                            </span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[42%] top-[78%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="wales" aria-label="Wales">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">We work across Wales
                                            </span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[54%] top-[70%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="west-midlands" aria-label="West Midlands">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">We work across the West Midlands
                                            </span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[68%] top-[66%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="east-midlands" aria-label="East Midlands">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">We work across the East Midlands</span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[24%] top-[50%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="northern-ireland" aria-label="Northern Ireland">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">We work across Northern Ireland</span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[75%] top-[78%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="south-east" aria-label="South East">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">We work across the South East of England</span>
                                        </button>

                                        <button type="button"
                                            class="group absolute left-[60%] top-[83%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 hover:z-50 group-hover:z-50"
                                            data-region-key="south" aria-label="South">

                                            <!-- visible dot -->
                                            <span
                                                class="h-5 w-5 rounded-full border-4 border-white bg-[#2c4a80] ring-1 ring-[#2c4a80]/50
                                                transition-all duration-200 group-hover:scale-125
                                                group-hover:ring-20 group-hover:ring-[#2c4a80]/30 group-hover:animate-pulse">
                                            </span>

                                            <!-- tooltip -->
                                            <span
                                                class="pointer-events-none absolute left-1/2 bottom-full mb-5 -translate-x-1/2 hidden w-max max-w-[10rem] whitespace-normal break-words text-center leading-tight rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-md group-hover:block z-50">We work across the South of England</span>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="min-w-0 lg:col-span-8">
                        <div
                            class="min-w-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div class="flex md:items-center gap-3">
                                    <span
                                        class="grid h-11 shrink-0 w-11 place-items-center rounded-xl bg-[#2c4a80]/10 text-[#2c4a80]">
                                        <i class="${escapeHtml(contactConfig.formIcon)}"></i>
                                    </span>
                                    <div>
                                        <p class="text-lg font-semibold text-slate-900">${escapeHtml(contactConfig.formTitle)}</p>
                                        <p class="text-sm text-slate-600">
                                        ${escapeHtml(contactConfig.formText).split('\n')[0]}
                                        <span class="block mt-2 text-slate-600">
                                        ${escapeHtml(contactConfig.formText).split('\n')[1]}
                                        </span>
                                        </p>
                                                                   
                                  
                                                                
                                    </div>
                                </div>

                                <div
                                    class="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                                    <i class="fa-solid fa-lock text-[#2c4a80]"></i>
                                    Secure submission
                                </div>
                            </div>

                            <form data-contact-form action="/contact-submit.php" method="POST" class="mt-8 grid gap-4 sm:grid-cols-2">
                                <input type="hidden" name="submission_url" value="" data-contact-url-field />
                                <input type="hidden" name="page_region" value="${contactConfig.regionFieldValue}" data-contact-region-field />
                                <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />
                                <div class="min-w-0 sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Name <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="text" name="name" required placeholder="Enter your name"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0">
                                    <label class="text-sm font-semibold text-slate-700">Email <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="email" name="email" required placeholder="Enter your email"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0">
                                    <label class="text-sm font-semibold text-slate-700">Phone No. (optional - if you prefer a callback)</label>
                                    <input type="tel" name="phone" placeholder=""
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0 sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Company <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <input type="text" name="company" required placeholder="Tell us your company name"
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15" />
                                </div>

                                <div class="min-w-0 sm:col-span-2">
                                    <label class="text-sm font-semibold text-slate-700">Message <span
                                            class="text-[#2c4a80]">*</span></label>
                                    <textarea name="message" rows="10" required placeholder="Enter your message here..."
                                        class="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2c4a80]/40 focus:ring-2 focus:ring-[#2c4a80]/15"></textarea>
                                </div>

                                <div
                                    class="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <button data-contact-submit type="submit"
                                        class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2c4a80] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c4a80]/20 transition hover:-translate-y-0.5 hover:bg-[#244070] focus:outline-none focus:ring-2 focus:ring-[#2c4a80]/35">
                                        Send Message
                                        <i class="fa-solid fa-paper-plane text-xs"></i>
                                    </button>
                                    <p data-contact-feedback class="hidden text-sm font-medium" aria-live="polite"></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  `;

  const contactForm = contact.querySelector("[data-contact-form]");
  const contactSubmitButton = contact.querySelector("[data-contact-submit]");
  const contactFeedback = contact.querySelector("[data-contact-feedback]");
  const contactUrlField = contact.querySelector("[data-contact-url-field]");
  const contactRegionField = contact.querySelector(
    "[data-contact-region-field]",
  );

  if (contactForm && contactSubmitButton && contactFeedback) {
    if (contactUrlField) {
      contactUrlField.value = window.location.href;
    }

    if (contactRegionField) {
      contactRegionField.value = contactConfig.regionFieldValue;
    }

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      contactSubmitButton.setAttribute("disabled", "true");
      contactSubmitButton.classList.add("opacity-70", "cursor-not-allowed");
      contactFeedback.classList.remove(
        "hidden",
        "text-red-600",
        "text-green-700",
      );
      contactFeedback.classList.add("text-slate-600");
      contactFeedback.textContent = "Submitting...";

      try {
        const formData = new FormData(contactForm);

        if (contactUrlField) {
          contactUrlField.value = window.location.href;
          formData.set("submission_url", contactUrlField.value);
        }

        if (contactRegionField) {
          formData.set("page_region", contactRegionField.value);
        }

        const response = await fetch(contactForm.action, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
        const result = await response.json();

        if (response.ok && result.success) {
          window.location.assign("/thank-you/");
          return;
        } else {
          contactFeedback.classList.remove("text-slate-600", "text-green-700");
          contactFeedback.classList.add("text-red-600");
          contactFeedback.textContent =
            result.message || "Submission failed. Please try again.";
        }
      } catch (error) {
        contactFeedback.classList.remove("text-slate-600", "text-green-700");
        contactFeedback.classList.add("text-red-600");
        contactFeedback.textContent = "Submission failed. Please try again.";
      } finally {
        contactSubmitButton.removeAttribute("disabled");
        contactSubmitButton.classList.remove(
          "opacity-70",
          "cursor-not-allowed",
        );
      }
    });
  }
}
