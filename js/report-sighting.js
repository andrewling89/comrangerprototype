var sightingLocationMap;

function configureMaps() {
    // Default latitude and longitude is for Brisbane, Australia.
    var defaultLatitude = -27.4698;
    var defaultLongitude = 153.0251;

    // Get the user's current location.
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            displayMap(position.coords.latitude, position.coords.longitude);
        });
    } else {
        displayMap(defaultLatitude, defaultLongitude);
    }
}

function displayMap(latitude, longitude) {
    sightingLocationMap = new google.maps.Map(document.getElementById('sightingLocationMap'), {
      center: {lat: latitude, lng: longitude},
      zoom: 15
    });
}