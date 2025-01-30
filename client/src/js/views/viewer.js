import { quotesV2 } from "../utils.js";

class Viewer {
  section = document.createElement("section");
  constructor() {
    this.init();
    this.renderQuote();
  }

  init() {
    const main = document.querySelector("main");
    main.innerHTML = "";
    
    const html = `
    <section class="viewer">
        <div class="quote_label">
            <p id="quote"></p>
        </div>
    </section>`;
    this.section.insertAdjacentHTML("afterbegin", html);
    main.appendChild(this.section);
  }

  renderQuote() {
    const quote = quotesV2[Math.round(Math.random() * 5)];
    document.getElementById("quote").insertAdjacentHTML("beforeend", quote);
  }
}

const viewer = new Viewer();
export default viewer;
