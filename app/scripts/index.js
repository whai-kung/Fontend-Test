$(function(){
  $('.carousel').carousel();
});
$('.navbar-toggle').click(function(e) {
  e.preventDefault();
  setTimeout($.proxy(function() {
    if ('ontouchstart' in document.documentElement) {
      $(this).siblings('.dropdown-backdrop').off().remove();
    }
  }, this), 0);
});
var hogarth = {
  map: null,
  infoWindow: null,
  initMap: function(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;
    map.setOptions({ scrollwheel: false });
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        hogarth.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      hogarth.handleLocationError(false, infoWindow, map.getCenter());
    }
  },
  handleLocationError: function(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
};
