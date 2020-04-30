class Card {
  constructor() {
    this.main = document.createElement("div");
    this.content = document.createElement("div");
    this.setup();
  }

  setup() {
    this.main.setAttribute("class", "card container");
    this.content.setAttribute("class", "card__content wrapper");
    this.main.appendChild(this.content);
  }

  setContent(data) {
    let mode = document.getElementById("slideshow-title").innerHTML;
    console.log(mode);
    this.content.innerHTML = `
      <h1>${mode == "global" ? "Totale" : "Italia"}</h1>
      <small>data from NovelCovid19</small>
      ${Object.keys(data).map(key => {
        return `<div class="card__section">
          <h4>${key}</h4>
          <p>${data[key]}</p>
        </div>`
      }).join("")}
    `;
  }
}

export default Card;