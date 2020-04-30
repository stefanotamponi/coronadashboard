class Slideshow {
  constructor() {
    this.core = document.createElement("div");
    this.setup();
  }

  setup() {
    this.core.setAttribute("class", "slideshow");
    this.core.innerHTML = `
      <h1 class="slideshow__title"id="slideshow-title"></h1>
      <div class="slideshow__inner" id="slideshow">
        <div class="slideshow__slide slide--global"><i class="fas fa-globe-europe"></i></div>
        <div class="slideshow__slide slide--local"><i class="fas fa-map-marker-alt"></i></div>
      </div>
    `
  }
}

export default Slideshow;