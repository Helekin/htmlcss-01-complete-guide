function initMap() {
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    const hash = this.hash;
    $("html, body").animate({ scrollTop: $(hash).offset().top - 100 }, 800);
  }
});
