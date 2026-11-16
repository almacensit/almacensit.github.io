// Solo existe para que el navegador ofrezca "Instalar app". No guarda nada: la app siempre se carga de internet.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function () {});
