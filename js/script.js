const slider = new Slider({
  node: document.querySelector(".slider-line"),
  interval: 3000,
});

const slider1 = new Slider({
  node: document.querySelector("#block2 .slider-line"),
  switchButton: document.querySelector("#block2 .circles"),
  interval: 5000,
});

window.onresize = () => {
  slider.resize();
  slider1.resize();
};

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
  navigator.userAgent
);

const menu = document.querySelector(".menu");
const menuButton = document.querySelector("#menu");

if (isMobile) {
  menu.classList.add("isMobile");
  menuButton.addEventListener("click", () => {
    document.body.classList.toggle("no-overflow");
    menu.classList.toggle("hidden");
    menuButton.classList.toggle("black");
  });
} else {
  menu.addEventListener("mouseleave", () => {
    menu.classList.add("hidden");
    menuButton.classList.remove("black");
  });

  menuButton.addEventListener("mouseenter", () => {
    menu.classList.remove("hidden");
    menuButton.classList.add("black");
  });
}
