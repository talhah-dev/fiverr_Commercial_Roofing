const footer = document.getElementById("footer");
footer.innerHTML = `
<footer class="relative overflow-hidden bg-slate-950">
  <img src="https://media.istockphoto.com/id/1982024135/photo/group-of-modern-three-industrial-warehouse-buildings-with-aluminum-steel-roof-in-factory-area.jpg?s=612x612&w=0&k=20&c=p0szX6C2O-VG-_cdAdJIW73PqO31fBvc0dQSwg3btrE=" width="1153" height="769" alt="" class="absolute inset-0 h-full w-full object-cover opacity-30" />
  <div class="absolute inset-0 bg-black/30"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid gap-10 py-14 lg:grid-cols-12">
      <div class="lg:col-span-10">
        <div class="flex items-center gap-3">
          <h2 class="text-[#9bb4e6] font-extrabold text-2xl sm:text-3xl leading-tight"><a class="transition hover:text-white" href="/">ATB Roofing &amp; Cladding</a></h2>
        </div>

        <p class="mt-5 max-w-4xl text-sm sm:text-base leading-relaxed text-white/75">
          Commercial roofing &amp; cladding services for industrial and commercial buildings across the UK
        </p>

        <div class="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
          <a href="mailto:enquiry@commercialroofingcladding.co.uk" class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 sm:w-auto">
            <i class="fa-solid fa-envelope text-[#9bb4e6]"></i>
            enquiry@commercialroofingcladding.co.uk
          </a>
          <a href="tel:03333449598" class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 sm:w-auto">
            <i class="fa-solid fa-phone text-[#9bb4e6]"></i>
            0333 344 9598
          </a>
        </div>
      </div>

      <div class="lg:col-span-2">
        <div class="grid gap-8">
          <div>
            <ul class="mt-4 space-y-3 text-xs text-white/75">
              <li>&nbsp;</li>
              <li>&nbsp;</li>

              <li><a class="transition hover:text-white" href="/terms-conditions/">Terms &amp; Conditions</a></li>
              <li><a class="transition hover:text-white" href="/privacy-policy/">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-6">
      <div class="flex items-center justify-center text-center">
        <p class="text-xs text-white/65">
          &copy; ${new Date().getFullYear()} - ATB Roofing &amp; Cladding - All rights reserved &nbsp; | &nbsp; Commercial Roofing &amp; Cladding Contractors.
        </p>
      </div>
    </div>
  </div>
</footer>
`;
