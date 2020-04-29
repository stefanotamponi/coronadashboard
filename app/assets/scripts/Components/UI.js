import { requestData } from "../utility";
import Card from './Card';

class UI {
  constructor() {
    this.mode = "global";
    this.card = new Card();
  }

  setContent(data) {
    this.card.setContent(data);
  }

  setView(value) {
    this.mode = value;
    requestData(value)
      .then(data => this.setContent(data));
  }
}

export default UI;