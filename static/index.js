const isMobile = /iPad|Android|Kindle/i.test(navigator.userAgent);

if (isMobile) {
  window.location.href = "mobile.html";
}
"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
const stockSW = "/uv/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];

  async function registerSW() {
                if (!navigator.serviceWorker) {
                if (
                  location.protocol !== "https:" &&
                  !swAllowedHostnames.includes(location.hostname)
                )
                  throw new Error("Service workers cannot be registered without https.");
                
                throw new Error("Your browser doesn't support service workers.");
                }
                
                await navigator.serviceWorker.register(stockSW);
                }
addEventListener("DOMContentLoaded", async (event) => {
await registerSW();

});
