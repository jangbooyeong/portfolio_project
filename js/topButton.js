// topButton 함수
window.onscroll = function() {
  const topButton = document.querySelector(".topButton");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.classList.add("opacity-in");
  } else {
      topButton.classList.remove("opacity-in");
  }
};
// scrollToTop 함수
function scrollToTop() {  
  window.scrollTo({
  top: 0,
  behavior: "smooth"
  });
}