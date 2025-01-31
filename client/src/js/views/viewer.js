import { quotesV2 } from "../utils.js";

class Viewer {
  section = document.createElement("section");

  constructor() {}

  init(data) {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    const html = `
    <section class="viewer">
        <div class="quote_label">
            <p id="quote"></p>
        </div>
    </section>`;

    this.section.insertAdjacentHTML("afterbegin", html);
    main.appendChild(this.section);

    this.renderQuote();

    this.renderGoal(data);
  }

  renderGoal(dataObj) {
    Object.entries(dataObj).forEach(([key, value]) => {
      const heading = document.createElement("h3");
      heading.classList.add("heading_tertiary", "viewer__goal");

      const keyLabel = document.createElement("strong");
      keyLabel.classList.add("viewer__label");
      keyLabel.innerHTML = key;

      const valueLabel = document.createElement("span");
      valueLabel.classList.add("viewer__goal");
      valueLabel.innerHTML = value;

      heading.appendChild(keyLabel);
      heading.appendChild(valueLabel);

      const section = document.querySelector(".viewer");
      section.insertAdjacentElement("beforeend", heading);
    });
  }

  renderQuote() {
    const quote = quotesV2[Math.round(Math.random() * 5)];
    document.getElementById("quote").insertAdjacentHTML("beforeend", quote);
  }
}

const viewer = new Viewer();
export default viewer;
