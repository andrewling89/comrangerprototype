var sightingsMap;

function configureMaps() {
    // Default latitude and longitude is for Brisbane, Australia.
    var defaultLatitude = -27.681318;
    var defaultLongitude = 152.850680;

    // Get the user's current location.
    /*if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            displayMap(position.coords.latitude, position.coords.longitude);
        });
    } else {*/
        displayMap(defaultLatitude, defaultLongitude);
    /*}*/
}

function displayMap(latitude, longitude) {
    sightingsMap = new google.maps.Map(document.getElementById('sightingsMap'), {
      center: {lat: latitude, lng: longitude},
      zoom: 15
    });

    var locations = [
        { lat: -27.681318, lng: 152.850680 },
        { lat: -27.681033, lng: 152.848019 },
        { lat: -27.682502, lng: 152.848250 },
        { lat: -27.681803, lng: 152.851322 },
        { lat: -27.681381, lng: 152.854795 },
        { lat: -27.681908, lng: 152.854834 }
    ];

    var markers = locations.map(function(location, i) {
        var marker = new google.maps.Marker({
            position: location,
            label: "Sighting " + i
        });

        var content = "<div id='sightingContent'><h3>Sighting " + i + "</h3>" +
            "<a href='sighting-info.html'>More Information</a></div>";

        marker.infoWindow = new google.maps.InfoWindow({
            content: content
        });

        marker.addListener('click', function() {
            marker.infoWindow.open(sightingsMap, marker);
        });

        return marker;
    });

    var markerCluster = new MarkerClusterer(sightingsMap, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}