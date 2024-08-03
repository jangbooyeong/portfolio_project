// 각 innerHeight엘리먼트와 path엘리먼트 가져오기
const about = document.querySelector("#about");
const skill = document.querySelector("#skill");
const camera = document.querySelector("#camera");
const project = document.querySelector("#project");
const path2 = document.querySelector(".path2");
const path3 = document.querySelector(".path3");
const path4 = document.querySelector(".path4");
const path5 = document.querySelector(".path5");
// 모바일 환경
const path2M = document.querySelector(".path2M");
const path5M = document.querySelector(".path5M");
const path6M = document.querySelector(".path6M");

// 각 패스별로 길이값 가져오기
const path2Length = path2.getTotalLength();
const path3Length = path3.getTotalLength();
const path4Length = path4.getTotalLength();
const path5Length = path5.getTotalLength();
// 모바일 환경
const path2MLength = path2M.getTotalLength();
const path5MLength = path5M.getTotalLength();
const path6MLength = path6M.getTotalLength();

// 각 패스별로 길이와 공백값 스타일에 넣기
path2.style.strokeDasharray = path2Length;
path2.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, about, path2Length);

path3.style.strokeDasharray = path3Length;
path3.style.strokeDashoffset = path3Length;

path4.style.strokeDasharray = path4Length;
path4.style.strokeDashoffset = path4Length;

path5.style.strokeDasharray = path5Length;
path5.style.strokeDashoffset = path5Length;

// 모바일 환경
path2M.style.strokeDasharray = path2MLength;
path2M.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, about, path2MLength);

path5M.style.strokeDasharray = path5MLength;
path5M.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, project, path5MLength);

path6M.style.strokeDasharray = path6MLength;
path6M.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, project, path6MLength);

// 총 레티오 값 구하기 함수
function calcDashoffset(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - (length * ratio);
  return value < 0 ? 0 : value > length ? length : value;
}

function calcDashoffsetHeight05(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / (element.offsetHeight * 0.5);
  const value = length - (length * ratio);
  return value < 0 ? 0 : value > length ? length : value;
}

function calcDashoffsetHeight02(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop) / (element.offsetHeight * 0.2);
  const value = length - (length * ratio);
  return value < 0 ? 0 : value > length ? length : value;
}

function calcDashoffsetTop11(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop * 1.1) / (element.offsetHeight * 0.8);
  const value = length - (length * ratio);
  return value < 0 ? 0 : value > length ? length : value;
}

function calcDashoffsetTop12(scrollY, element, length) {
  const ratio = (scrollY - element.offsetTop * 1.2) / (element.offsetHeight * 0.4);
  const value = length - (length * ratio);
  return value < 0 ? 0 : value > length ? length : value;
}

// 스크롤 이벤트 발생시 스크롤 높이와 화면에 보이는 높이 구하고 calcDashoffset함수 호출
function scrollHandler() {
  const scrollY = window.scrollY + (window.innerHeight * 0.8);
  path2.style.strokeDashoffset = calcDashoffset(scrollY, about, path2Length);
  path3.style.strokeDashoffset = calcDashoffsetTop11(scrollY, skill, path3Length);
  path4.style.strokeDashoffset = calcDashoffset(scrollY, camera, path4Length);
  path5.style.strokeDashoffset = calcDashoffset(scrollY, project, path5Length);

  path2M.style.strokeDashoffset = calcDashoffsetHeight05(scrollY, about, path2MLength);
  path5M.style.strokeDashoffset = calcDashoffsetHeight02(scrollY, project, path5MLength);
  path6M.style.strokeDashoffset = calcDashoffsetTop12(scrollY, project, path6MLength);
}

window.addEventListener("scroll", scrollHandler);