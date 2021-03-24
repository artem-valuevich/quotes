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
