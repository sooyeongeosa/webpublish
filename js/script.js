const allMenu = document.querySelector(".all-menu"),
  allMenuWrapper = document.querySelector(".all-menu-wrapper"),
  allMenuMask = document.querySelector(".all-menu-mask"),
  allMenuClose = document.querySelector(".all-menu-close");

// all-menu버튼이 클릭되면
// - 전체메뉴 모달창과 mask layer가 나타난다.
allMenu.addEventListener("click", function () {
  allMenuWrapper.classList.add("active");
  allMenuMask.classList.add("active");
});
// all-menu-close버튼이 클릭되면(click event)
// - 전체메뉴 모달창과 mask layer가 사라진다.
allMenuClose.addEventListener("click", function () {
  allMenuWrapper.classList.remove("active");
  allMenuMask.classList.remove("active");
});
// 모바일 메뉴 기능
const mbBtn = document.querySelector(".mb-bt"),
  mbNav = document.querySelector(".mb-nav"),
  mbMenuMask = document.querySelector(".mb-menu-mask");

// 모바일 버튼이 클릭되면
// - 1. 모바일 메뉴가 생기고
// - 2. 모바일버튼이 x로 변환됨
mbBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mbNav.classList.toggle("active");
  mbMenuMask.classList.toggle("active");
  mbBtn.classList.toggle("active");
  mbMenuList.forEach(function (list, index) {
    mbMenuList[index].style.height = "55px";
  });
});

// 모바일 서브메뉴 펼치기(아코디언)기능
const mbMenuList = document.querySelectorAll(".mb-menu > li");
const mbSubMenu = document.querySelectorAll(".mb-subMenu"),
  mbMainMenu = document.querySelectorAll(".mb-mainMenu");

// 펼쳐질 서브메뉴의 높이값 저장
let mbSubMenuHeight = [];

// 서브메뉴의 높이값을 계산하여 배열값으로 저장
mbSubMenu.forEach(function (list, index) {
  let count = list.querySelectorAll("li").length;
  mbSubMenuHeight[index] = 52 * count + 22;
});
// 모바일메뉴(li>a(.mb-mainMenu)) 클릭했을 때
mbMainMenu.forEach(function (mainList, index) {
  mainList.addEventListener("click", function (e) {
    e.preventDefault();
    mainList.classList.toggle("open");
    let isOpen = mainList.classList.contains("open");
    if (isOpen) {
      let temp = mbSubMenuHeight[index];
      //   console.log(temp);
      //   mbMenuList[index].style.height = `(${temp} + 55)px`;
      mbMenuList[index].style.height = `${temp + 55}px`;
    } else {
      mbMenuList[index].style.height = `55px`;
    }
  });
});
// 화면사이즈 체크
window.addEventListener("resize", function () {
  let temp = window.innerWidth;
  //   console.log(temp);
  if (temp > 1200) {
    mbNav.classList.remove("active");
    mbMenuMask.classList.remove("active");
    mbBtn.classList.remove("active");
    mbMenuList.forEach(function (list, index) {
      mbMenuList[index].style.height = "55px";
    });
  } else {
    allMenuWrapper.classList.remove("active");
    allMenuMask.classList.remove("active");
  }
});

// 화면위로 이동
// const goTop = document.querySelector(".gotop");
// goTop.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

console.log(mbSubMenuHeight);
new Swiper(".sw-visual", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  speed: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
