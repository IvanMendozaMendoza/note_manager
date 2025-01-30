import sidebar from "./views/sidebar.js";
import viewer from "./views/viewer.js";

class App {
  constructor() {
    this.sideBar = sidebar;
    this.viewer = viewer;
  }
}

const app = new App();