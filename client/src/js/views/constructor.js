import { guideStages } from "../utils.js";

class Constructor {
  section = document.createElement("section");
  main = document.querySelector("main");
  currentGuide = 0;
  goalDoc = {};

  constructor() {}

  init() {
    this.section.className = "constructor";
    this.main.innerHTML = "";

    this.section.innerHTML = `
    <div class="input__box">
        <div class="input__field">
            <input
            type="text"
            name="textarea"
            class="input"
            id="input"
            autocomplete="off"
            placeholder="Your thoughts..."
            />
        </div>
    </div>
  `;

    this.main.appendChild(this.section);
    this.renderGuide();
    this.renderBtn();
  }

  renderGuide() {
    const constructorGuide = document.querySelector(".constructor__guide");

    if (constructorGuide) {
      this.section.removeChild(constructorGuide);
    }
    const html = `
      <div class="constructor__guide">
        <p id="guide"></p>
      </div>
    `;
    this.section.insertAdjacentHTML("afterbegin", html);

    const guide = document.getElementById("guide");
    guide.innerHTML = "";
    guide.insertAdjacentHTML("beforeend", guideStages[this.currentGuide]);
  }

  renderBtn() {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerHTML = "→";

    btn.addEventListener("click", () => {
      switch (this.currentGuide) {
        case 0: {
          this.goalDoc = { ...this.goalDoc, "5y": this.getInput() };
          this.clearInput(1);
          break;
        }
        case 1: {
          this.goalDoc = { ...this.goalDoc, "1y": this.getInput() };
          this.clearInput(2);
          break;
        }
        case 2: {
          this.goalDoc = { ...this.goalDoc, values: this.getInput() };
          this.clearInput(3);
          break;
        }
        case 3: {
          this.goalDoc = { ...this.goalDoc, mission: this.getInput() };
          this.clearInput(4);
          break;
        }
        case 4: {
          this.goalDoc = { ...this.goalDoc, vision: this.getInput() };
          this.clearInput(5);
          break;
        }
        case guideStages.length - 1: {
          this.goalDoc = { ...this.goalDoc, models: this.getInput() };
          this.clearInput(0);
          console.log(this.goalDoc)
          break;
        }
      }
    });

    document.querySelector(".input__field").appendChild(btn);
  }

  getInput() {
    const input = document.getElementById("input");
    return input.value;
  }

  // exportGoal(fn) {
  //   // data goal saved
  //   // todo, export title to the fn as keyword
  //   fn();
  // }

  // createGoalDoc() {}

  clearInput(indexGuide) {
    const input = document.getElementById("input");
    input.value = "";

    this.currentGuide = indexGuide;
    this.renderGuide();
  }
}

const constructor = new Constructor();
export default constructor;
