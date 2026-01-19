
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("plenty-wheels").then(cache =>
      cache.addAll([
        "index.html",
        "booking.html",
        "services.html"
      ])
    )
  );
});
