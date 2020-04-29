import Router from './Components/Router';
import UI from './Components/UI';

class App {
  constructor() {
    this.app = document.getElementById("root");
    this.mainContent = document.createElement("div");
    this.ui = new UI();
    this.initialize();
  }

  initialize() {
    this.mainContent.setAttribute("class", "main-content container");
    this.mainContent.setAttribute("id", "main-content");
    this.mainContent.appendChild(this.ui.mainContent);
    this.app.appendChild(this.mainContent);
  }
}

const routes = [
  {path: "/", template: "global"},
  {path: "/local", template: "local"}
]

const app = new App();

export const router = new Router(routes, app);

export default App;