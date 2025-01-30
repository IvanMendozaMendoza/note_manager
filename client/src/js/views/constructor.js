import { guideStages } from "../utils.js";
class Constructor {
  section = document.createElement("section");

  constructor() {}

  init() {
    this.section.className = "constructor";
    const main = document.querySelector("main");
    main.innerHTML = "";

    this.section.innerHTML = `
    <div class="constructor__guide">
        <p id="guide"></p>
    </div>

    <div class="input__box">
        <div class="input__field">
            <input
            type="text"
            name="textarea"
            class="input"
            placeholder="Your thoughts..."
            />
            <button class="btn">→</button>
        </div>
    </div>
  `;

    main.appendChild(this.section);
    this.renderGuide();
  }

  renderGuide() {
    const guide = guideStages[0];
    document.getElementById("guide").insertAdjacentHTML("beforeend", guide);
  }
}

const constructor = new Constructor();
export default constructor;
