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
    // this.renderGoal();
  }

  renderQuote() {
    this.sidebarQuote.insertAdjacentHTML(
      "beforeend",
      quotesV1[Math.round(Math.random() * 5)]
    );
  }

  renderGoal(title) {
    const goalItem = document.createElement('li');
    goalItem.classList = 'goal_list--item'

    const goalLink = document.createElement('a');
    goalLink.innerHTML = title;

    goalItem.appendChild(goalItem);

    this.goalList.appendChild(goalItem);
  }
}

const sidebar = new SideBar();
export default sidebar;
