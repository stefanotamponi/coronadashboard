import Router from './Components/Router';
import UI from './Components/UI';

class App {
  constructor() {
    this.app = document.getElementById("root");
    this.mainContent = document.createElement("div");
    this.initialize();
    this.ui = new UI();
  }

  initialize() {
    this.mainContent.setAttribute("class", "main-content container");
    this.mainContent.setAttribute("id", "main-content");
    this.app.appendChild(this.mainContent);
  }
}

const routes = [
  {path: "/", template: "global"},
  {path: "/local", template: "local"}
]

export const app = new App();

export const router = new Router(routes, app);

export default App;