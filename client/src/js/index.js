import sidebar from "./views/sidebar.js";
import viewer from "./views/viewer.js";
import constructor from "./views/constructor.js";

class App {
  constructor() {
    this.init();
    // this.viewer = viewer.init();
  }

  init() {
    this.sideBar = sidebar;
    this.constructor = constructor.init();
  }
}

const app = new App();
