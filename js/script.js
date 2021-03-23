const slider = new Slider(document.querySelector(".slider-line"), 3000);

window.onresize = slider.resize.bind(slider);
window.slider = slider;
