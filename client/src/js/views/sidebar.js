import { quotesV1, goalListNames } from "../utils.js";
import viewer from "./viewer.js";

class SideBar {
  sidebarQuote = document.getElementById("sidebar_quote");
  goalList = document.getElementById("goal_list");
  goals = [];

  constructor() {
    this.renderQuote();
  }

  renderQuote() {
    this.sidebarQuote.insertAdjacentHTML(
      "beforeend",
      quotesV1[Math.round(Math.random() * 5)]
    );
  }

  renderGoal(data) {
    this.goals.push(data);

    const goalItem = document.createElement("li");
    goalItem.classList = "goal_list--item";

    const goalLink = document.createElement("a");
    goalLink.innerHTML = goalListNames[Math.round(Math.random() * 10)];
    goalLink.id = `${this.goals.length - 1}`;
    goalItem.addEventListener("click", () => this.renderView(this.goals[goalLink.id]));
    goalItem.appendChild(goalLink);

    this.goalList.appendChild(goalItem);
  }

  renderView(data) {
    viewer.init(data)
  }
}

const sidebar = new SideBar();
export default sidebar;
