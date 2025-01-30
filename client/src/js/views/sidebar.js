import { quotesV1 } from "../utils.js";

const goalExample = `
<li class="goal_list--item">
    <a href="#">Manifestacion Master</a>
    </li>`;

class SideBar {
  sidebarQuote = document.getElementById("sidebar_quote");
  goalList = document.getElementById("goal_list");
  constructor() {
    this.renderQuote();
    this.renderGoal();
  }

  renderQuote() {
    this.sidebarQuote.insertAdjacentHTML(
      "beforeend",
      quotesV1[Math.round(Math.random() * 5)]
    );
  }

  renderGoal() {
    this.goalList.insertAdjacentHTML("beforeend", goalExample);
  }
}

const sidebar = new SideBar();
export default sidebar;
