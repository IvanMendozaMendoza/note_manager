import sidebar from "./views/sidebar.js";
import viewer from "./views/viewer.js";
import constructor from "./views/constructor.js";

class App {
  constructor() {
    this.sideBar = sidebar;
    // this.constructor = constructor;
    this.viewer = viewer.init();
  }
}

const app = new App();