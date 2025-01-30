import sidebar from "./views/sidebar.js";
import constructor from "./views/constructor.js";
// import viewer from "./views/viewer.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    this.sideBar = sidebar;
    this.constructor = constructor.init();
  }
}

const app = new App();
