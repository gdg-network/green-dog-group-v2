importScripts("/static/uv/uv.sw.js");

const sw = new regesterSW();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
