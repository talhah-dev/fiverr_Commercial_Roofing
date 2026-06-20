const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div id="toTopBtn"
  class="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-[#2c4a80] text-white flex items-center justify-center cursor-pointer shadow-lg transition-all duration-500 opacity-0 translate-y-4 pointer-events-none hover:bg-[#2c4a80]/80">
  <i class="fa-solid fa-angle-up"></i>
</div>
`


const toTopBtn = document.getElementById("toTopBtn");

const toggleToTop = () => {
  if (window.scrollY > 450) {
    toTopBtn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
    toTopBtn.classList.add("opacity-100", "translate-y-0");
  } else {
    toTopBtn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    toTopBtn.classList.remove("opacity-100", "translate-y-0");
  }
};

window.addEventListener("scroll", toggleToTop);
toggleToTop();

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});
