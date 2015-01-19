/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var geocoder = new google.maps.Geocoder();

function geocodePosition(pos) {
  geocoder.geocode({
    latLng: pos
  }, function(responses) {
    if (responses && responses.length > 0) {
      updateMarkerAddress(responses[0].formatted_address);
    } else {
      updateMarkerAddress('Cannot determine address at this location.');
    }
  });
}

function updateMarkerStatus(str) {
  
}

function updateMarkerPosition(latLng) {
  /*document.getElementById('info').innerHTML = [
    latLng.lat(),
    latLng.lng()
  ].join(', ');*/
  
  
}

function updateMarkerAddress(str) {
 
}
var map;
function codeAddress(address) {
    var coor;
        geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var myOptions = {
                zoom: 15,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
            coor=results[0].geometry.location;
            var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    draggable: true
                });

             // Update current position info.
                updateMarkerPosition(results[0].geometry.location);
                geocodePosition(results[0].geometry.location);

            // Add dragging event listeners.
            google.maps.event.addListener(marker, 'dragstart', function() {
              updateMarkerAddress('Dragging...');
            });

            google.maps.event.addListener(marker, 'drag', function() {
              updateMarkerStatus('Dragging...');
              updateMarkerPosition(marker.getPosition());
            });

            google.maps.event.addListener(marker, 'dragend', function() {
              updateMarkerStatus('Drag ended');
              geocodePosition(marker.getPosition());
            });  
            }
        });
 
        
    }
function initialize() {
    var adresse=codeAddress(document.getElementById("adresse").value);
    google.maps.event.addDomListener(window, 'load', codeAddress((adresse==null)?"montreal":adresse));
}

function alert(){
    var fileVal=document.getElementById("examinar");
alert(fileVal.value);
}


function initDateHours(){
$(function(){
    $.datepicker.setDefaults($.extend($.datepicker.regional['']));
    $('#datec').datepicker({  minDate: '0'});

});
  
$(function(){   
    $('#heurec').timepicker({ 
        'step': 15,
        'timeFormat': 'H:i:s'
    });

});

$(function(){
    $.datepicker.setDefaults($.extend($.datepicker.regional['']));
    $('#datef').datepicker({  minDate: '0'});

});
  
$(function(){   
    $('#heuref').timepicker({ 
        'step': 15,
        'timeFormat': 'H:i:s'
    });

});
}
disabled="disabled";

readonly="readonly";

function editForm(){
    document.getElementById('titre_evenement').removeAttribute("readonly");
    document.getElementById('adresse').removeAttribute("readonly");
    document.getElementById('datec').removeAttribute("readonly");
    document.getElementById('heurec').removeAttribute("readonly");
    document.getElementById('datef').removeAttribute("readonly");
    document.getElementById('heuref').removeAttribute("readonly");
    document.getElementById('descripcion').removeAttribute("readonly");
    document.getElementById('nombreMaxP').removeAttribute("readonly");
    $(function(){
        $.datepicker.setDefaults($.extend($.datepicker.regional['']));
        $('#datec').datepicker({  minDate: '0'});

    });

    $(function(){   
        $('#heurec').timepicker({ 
            'step': 15,
            'timeFormat': 'H:i:s'
        });

    });

    $(function(){
        $.datepicker.setDefaults($.extend($.datepicker.regional['']));
        $('#datef').datepicker({  minDate: '0'});

    });

    $(function(){   
        $('#heuref').timepicker({ 
            'step': 15,
            'timeFormat': 'H:i:s'
        });

    });
    document.getElementById('titre_evenement').focus();
    
}


