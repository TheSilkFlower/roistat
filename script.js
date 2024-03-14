const report = new Swiper('.reports-swiper', {
    loop: true,
    direction: 'horizontal',
    autoplay: {
    delay: 5000
  }
})

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center : { lat: 56.309348, lng: 44.028366 },
    zoom: 18
  });
}

initMap();