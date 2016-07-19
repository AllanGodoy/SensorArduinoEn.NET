

document.getElementById("mapa").addEventListener("click", function () {
    //$("#map_go").html("Nuevo contenido de la capa");
    // $(div).load("map_go");
   // $('#buttonbar').load(this.href);
directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer();
var MLat;   
var MLon;
   
var UK;
//= new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

var UK = new google.maps.LatLng(15.514920399999998, -87.9922684);
//var IT = new google.maps.LatLng(15.348968871711532, -88.18464497666014);
var noStreetNames = [{
    featureType: "road",
    elementType: "labels",
    stylers: [{
        visibility: "off"
    }]
}];

hideLabels = new google.maps.StyledMapType(noStreetNames, {
    name: "hideLabels"
});


var myOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //mapTypeId: google.maps.MapTypeId.SATELLITE,
    center: UK
}

var showPosition = function (position) {
    //--------------------------------vergueo
   // UK= new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    //--------------------------------
    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    document.getElementById("latitude").value = userLatLng.lat();
    document.getElementById("Longitude").value = userLatLng.lng();
    //var userLatLng = new google.maps.LatLng(15.34622194947929, -88.1817562375511);
    var marker = new google.maps.Marker({
        position: userLatLng,
        title: 'Your Location',
        animation: google.maps.Animation.DROP,
        draggable: true,
        map: map
    });
    marker.setIcon('https://dl.dropboxusercontent.com/u/20056281/Iconos/male-2.png');
     var infowindow = new google.maps.InfoWindow({
        
        content: '<div id="infodiv" style="width: 300px">your location</div>'

    });

    google.maps.event.addListener(marker, 'dragend', function () {
        infowindow.open(map, marker)
        map.setCenter(marker.getPosition())
        document.getElementById("infodiv").innerHTML = marker.getPosition();
        document.getElementById("latitude").value = marker.getPosition().lat();
        document.getElementById("Longitude").value = marker.getPosition().lng();
       // MLat = marker.getPosition().lat();
       //MLon = marker.getPosition().lng();
        //alert("Latitude" + marker.getPosition.lat() + " Longitude"+marker.getPosition.lng());
       // alert("hola");
    });
    

    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map, marker)
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        t = setTimeout(function () {
            infowindow.close()
        }, 3000);
    });

    google.maps.event.addListener(infowindow, 'domready', function () {
        $('#infodiv').on('mouseenter', function () {
            clearTimeout(t);
        }).on('mouseleave', function () {
            t = setTimeout(function () {
                infowindow.close()
            }, 1000);
        })
    });

    var input = document.getElementById('nptsearch');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.bindTo('bounds', map);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(7);
        }

        var image = new google.maps.MarkerImage(
        place.icon, new google.maps.Size(71, 71), new google.maps.Point(0, 0), new google.maps.Point(17, 34), new google.maps.Size(35, 35));
        marker.setIcon(image);
        marker.setPosition(place.geometry.location);

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });

    map.setCenter(marker.getPosition());
}

navigator.geolocation.getCurrentPosition(showPosition);

map = new google.maps.Map(document.getElementById("map_go"), myOptions);


directionsDisplay.setMap(map);

map.mapTypes.set('hide_street_names', hideLabels);

function offsetCenter(latlng, offsetx, offsety) {
    var scale = Math.pow(2, map.getZoom());
    var nw = new google.maps.LatLng(
    map.getBounds().getNorthEast().lat(), map.getBounds().getSouthWest().lng());

    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
    var pixelOffset = new google.maps.Point((offsetx / scale) || 0, (offsety / scale) || 0)

    var worldCoordinateNewCenter = new google.maps.Point(
    worldCoordinateCenter.x - pixelOffset.x, worldCoordinateCenter.y + pixelOffset.y);

    var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

    map.setCenter(newCenter);
}

function addmarker(latilongi) {
    var marker = new google.maps.Marker({
        position: latilongi,
        title: 'new marker',
        draggable: true,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<div id="infodiv2">infowindow!</div>'
    });
    //map.setZoom(15);
    map.setCenter(marker.getPosition())
    //infowindow.open(map, marker)
}

$(window).on('resize', function () {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})

$('#btnlabels').toggle(function () {
    map.setZoom(15);
    map.setMapTypeId('hide_street_names')
}, function () {
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP)
    //map.setMapTypeId(google.maps.MapTypeId.SATELLITE)
})

$('#btnoffset').on('click', function () {
    offsetCenter(map.getCenter(), 0, -100)
})

$('#btnaddmarker').on('click', function () {
    addmarker(IT)
})

});