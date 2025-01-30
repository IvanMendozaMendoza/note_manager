import {quotesV1} from "./utils.js"

// SIDEBAR
const sidebarQuote = document.getElementById("sidebar_quote");
sidebarQuote.insertAdjacentHTML('beforeend', quotesV1[Math.round(Math.random() * 5)])

