self.addEventListener("install",e=>{
e.waitUntil(caches.open("pw").then(c=>c.addAll(["index.html","booking.html"])))
});
