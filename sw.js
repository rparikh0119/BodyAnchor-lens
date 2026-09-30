// Minimal service worker, used only to test whether registration is permitted
// on Meta Ray-Ban Display. Meta's docs listed offline support as unsupported.
// The Connect session said service workers and the Cache API work. This settles it.
self.addEventListener("install", function(){ self.skipWaiting(); });
self.addEventListener("activate", function(e){ e.waitUntil(self.clients.claim()); });
