import { kFormat } from '../utility';

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
    let mode = document.getElementById("slideshow-title").innerHTML,
    content = `
      <div class="card__section card__section--main">
        <div>
          <h3 title="${data["cases"]}">${kFormat(data["cases"])}</h3>
          <p>Casi</p>
        </div>
        <div>
          <h3 title="${data["recovered"]}">${kFormat(data["recovered"])}</h3>
          <p>Guariti</p>
        </div>
        <div>
          <h3 title="${data["deaths"]}">${kFormat(data["deaths"])}</h3>
          <p>Decessi</p>
        </div>
      </div>
      <div class="card__section">
        <div>
          <h3 title="${data["critical"]}">${kFormat(data["critical"])}</h3>
          <p>Critici</p>
        </div>
        <div>
          <h3 title="${data["tests"]}">${kFormat(data["tests"])}</h3>
          <p>Test effettuati</p>
        </div>
      </div>
      <h2>Dati giornalieri</h2>
      <div class="card__section card__section--alt">
        <div>
          <h3 title="${data["todayCases"]}">${kFormat(data["todayCases"])}</h3>
          <p>Casi</p>
        </div>
        <div>
          <h3 title="${data["todayDeaths"]}">${kFormat(data["todayDeaths"])}</h3>
          <p>Decessi</p>
        </div>
      </div>
    `
    console.log(data)

    this.content.innerHTML = `
      <h1>Totale</h1>
      ${content}
      <p>Dati forniti da <a href="https://github.com/novelCOVID/API">NovelCovid</a></p>
    `;
  }
}

export default Card;