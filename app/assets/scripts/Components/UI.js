import { requestData } from "../utility";

class UI {
  constructor() {
    this.app = document.getElementById("root");
    this.mainContent = document.createElement("div");
    this.mode = "global";
    this.setup();
  }

  setup() {
    this.app.appendChild(this.mainContent);
  }

  setContent(data) {
    this.mainContent.innerHTML = JSON.stringify(data);
  }

  setView(value) {
    requestData(value).then(data => this.setContent(data));
    this.mode = value;
  }
}

export default UI;