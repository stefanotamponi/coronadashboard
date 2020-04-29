class Card {
  constructor() {
    this.app = document.getElementById("main-content");
    this.content = document.createElement("div");
    this.setup();
  }

  setup() {
    const outer = document.createElement("div");
    outer.setAttribute("class", "card container");
    this.content.setAttribute("class", "card__content wrapper");
    outer.appendChild(this.content);
    this.app.appendChild(outer);
  }

  setContent(data) {
    console.log(data);
    this.content.innerHTML = `
      <h1>Coronavirus Data</h1>
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