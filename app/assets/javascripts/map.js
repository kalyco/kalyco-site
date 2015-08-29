handler = Gmaps.build('Google');
handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
  markers = handler.addMarkers([
    {
      "lat": 0,
      "lng": 0,
      "picture": {
        "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
        "width":  36,
        "height": 36
      },
      "infowindow": "hello!"
    }
  ]);
  handler.bounds.extendWith(markers);
  handler.fitMapToBounds();
  handler.setCenter(42.3601, 71.0589)
});

var marker;

// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: {lat: 59.325, lng: 18.070}
//   });

//   marker = new google.maps.Marker({
//     map: map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: {lat: 59.327, lng: 18.067}
//   });
//   marker.addListener('click', toggleBounce);
// }

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

// [
//     {
//         "featureType": "landscape",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 65
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 51
//             },
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "road.arterial",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 30
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "road.local",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "lightness": 40
//             },
//             {
//                 "visibility": "on"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "stylers": [
//             {
//                 "saturation": -100
//             },
//             {
//                 "visibility": "simplified"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.province",
//         "stylers": [
//             {
//                 "visibility": "off"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels",
//         "stylers": [
//             {
//                 "visibility": "on"
//             },
//             {
//                 "lightness": -25
//             },
//             {
//                 "saturation": -100
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "hue": "#ffff00"
//             },
//             {
//                 "lightness": -25
//             },
//             {
//                 "saturation": -97
//             }
//         ]
//     }
// ]

