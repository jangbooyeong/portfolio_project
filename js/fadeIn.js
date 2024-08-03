// Intersection Observer 생성
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        // 화면에 들어옴
        entry.target.classList.add("fade-in");
        entry.target.classList.add("fade-right");
      } else {
        // 화면에 나감
        entry.target.classList.remove("fade-in");
        entry.target.classList.remove("fade-right");
      }
    });
  },
  // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단
  { threshold: 0.1 }
);

// 관찰 대상 설정
const targetElements = document.querySelectorAll(".fade__wrap-Y");
targetElements.forEach((element) => {
  observer.observe(element);
});

const targetElements2 = document.querySelectorAll(".fade__wrap-X");
targetElements2.forEach((element) => {
  observer.observe(element);
})