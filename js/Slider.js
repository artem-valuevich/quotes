class Slider {
  constructor(node, interval) {
    this.container = node;
    this.interval = interval;
    this.timer = setTimeout(this.switch.bind(this), this.interval);
    this.currentSlide = 0;
    this.images = this.container.querySelectorAll("img");
    this.imagesAmount = this.images.length;

    this.resize();

    this.circles = document.createElement("div");
    this.circles.classList.add("circles");

    for (let i = 0; i < this.imagesAmount; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      if (!i) circle.classList.add("active");
      circle.addEventListener("click", this.switch.bind(this, i));
      this.circles.insertAdjacentElement("beforeend", circle);
    }

    node.insertAdjacentElement("afterend", this.circles);
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.images.forEach(image => {
      image.style.width = this.width + "px";
    });
  }

  switch(toSlide) {
    clearTimeout(this.timer);
    const prev = this.currentSlide++;

    if (this.currentSlide >= this.imagesAmount) {
      this.currentSlide = 0;
    }

    if (toSlide !== undefined) {
      this.currentSlide = toSlide;
    }

    this.circles
      .querySelectorAll(".circle")
      [this.currentSlide].classList.toggle("active");

    this.circles.querySelectorAll(".circle")[prev].classList.toggle("active");
    this.container.style = `transform: translateX(-${
      this.width * this.currentSlide
    }px)`;
    this.timer = setTimeout(this.switch.bind(this), this.interval);
  }
}
