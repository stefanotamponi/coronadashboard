class Slideshow {
  constructor() {
    this.core = document.createElement("div");
    this.setup();
  }

  setup() {
    this.core.setAttribute("class", "slideshow");
    this.core.innerHTML = `
      <div class="slideshow__inner" id="slideshow">
        <div class="slideshow__slide slide--global">Global</div>
        <div class="slideshow__slide slide--local">Local</div>
      </div>
    `
  }
}

export default Slideshow;