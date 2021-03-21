const slider = new Slider(document.querySelector(".slider-line"));

window.onresize = slider.resize.bind(slider);
window.slider = slider;
