class Slider {
  constructor(node) {
    this.container = node;
    this.currentSlide = 0;
    this.images = this.container.querySelectorAll("img");
    this.imagesAmount = this.images.length;
    this.resize();
    setInterval(this.switch.bind(this), 3000);
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.images.forEach(image => {
      image.style.width = this.width + "px";
    });
  }

  switch() {
    this.currentSlide++;
    if (this.currentSlide >= this.imagesAmount) {
      this.currentSlide = 0;
    }
    this.container.style = `transform: translateX(-${
      this.width * this.currentSlide
    }px)`;
  }
}
