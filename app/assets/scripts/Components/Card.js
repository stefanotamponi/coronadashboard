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
    this.content.innerHTML = `
      <h1>COVID Stats</h1>
      <small>from NovelCovid19</small>
      <ul>
        ${Object.keys(data).map(key => {
          return `<li>${key}: ${data[key]}</li>`;
        }).join("")}
      </ul>
    `;
  }
}

export default Card;