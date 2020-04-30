import { requestData } from "../utility";
import Card from './Card';
import { router } from '../App';

class UI {
  constructor() {
    this.app = document.getElementById("main-content");
    this.mode = "global";
    this.card = new Card();
    this.navigation = document.createElement("nav");
    this.setup();
  }

  setup() {
    this.navigation.setAttribute("class", "navigation")
    this.navigation.innerHTML=`
      <ul>
        <li class="main-navigation" id="global"><</li>
        <li class="main-navigation" id="local">></li>
      </ul>
    `
    this.app.appendChild(this.card.main);
    this.app.appendChild(this.navigation);
    this.events();
  }

  events() {
    document.querySelectorAll(".main-navigation").forEach( el => {
      el.addEventListener("click", this.mainNavigationHandler.bind(this))
    })
  }

  mainNavigationHandler(e) {
    if (e.target.id !== "global") {
      router.loadRoute(e.target.id)
    } else {
      router.loadRoute("")
    }
  }

  setContent(data) {
    this.card.setContent(data);
  }

  setView(value) {
    let slideshow = document.getElementById("slideshow"),
    title = document.getElementById("slideshow-title");
    this.mode = value;

    if (value == "global") {
      slideshow.style.transform = "translateX(0%)";
    } else if (value == "local") {
      slideshow.style.transform = "translateX(-50%)";
    }
    title.innerHTML = this.mode;

    requestData(value)
      .then(data => this.setContent(data));
  }
}

export default UI;