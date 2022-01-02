



function $(element) {
  return document.getElementById(element);
}
var mapCarsLocator = {};

mapCarsLocator.pics = null;
mapCarsLocator.map = null;
mapCarsLocator.markerClusterer = null;
mapCarsLocator.markers = [];
mapCarsLocator.infoWindow = null;

mapCarsLocator.init = function(data) {
  this.settings = data;
  var latlng = new google.maps.LatLng(this.settings.map_lat, this.settings.map_lng);
  var zoomwfsfsaf = parseFloat( this.settings.map_zoom );
  var options = {
    'zoom':  zoomwfsfsaf,
    'center': latlng,
    'mapTypeId': google.maps.MapTypeId.ROADMAP,
    'mapTypeControl': false,
  };
  mapCarsLocator.map = new google.maps.Map($(data.map_id), options);
  mapCarsLocator.pics = data.photos;
  mapCarsLocator.map.setOptions({styles: this.settings.map_styles});
  mapCarsLocator.infoWindow = new google.maps.InfoWindow();
  mapCarsLocator.showMarkers();
};

mapCarsLocator.showMarkers = function() {
  mapCarsLocator.markers = [];
  
  if (mapCarsLocator.markerClusterer) {
    mapCarsLocator.markerClusterer.clearMarkers();
  }
  var panel = {};
  panel.innerHTML = '';
  var numMarkers = mapCarsLocator.pics.length;
  for (var i = 0; i < numMarkers; i++) {
    var titleText = mapCarsLocator.pics[i].post_title;
    if (titleText == '') {
      titleText = 'No title';
    }
    var latLng = new google.maps.LatLng(mapCarsLocator.pics[i].latitude, mapCarsLocator.pics[i].longitude);
    var imageUrl = this.settings['icon_url'];
    var markerImage;
    if(imageUrl){
      markerImage = new google.maps.MarkerImage( imageUrl, new google.maps.Size(this.settings['icon_width'], this.settings['icon_height']))
    }else{
       markerImage = new google.maps.MarkerImage('https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png',
                              new google.maps.Size(27, 43)  );
    }
    var marker = new google.maps.Marker({
      'position': latLng,
      'icon': markerImage
    });
    var fn = mapCarsLocator.markerClickFunction(mapCarsLocator.pics[i], latLng, marker);
    google.maps.event.addListener(marker, 'click', fn);
    mapCarsLocator.markers.push(marker);
  }

  window.setTimeout(mapCarsLocator.time, 0);
};

mapCarsLocator.markerClickFunction = function(pic, latlng, marker) {
  return function(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
    var title = pic.post_title;
    var url = pic.post_url;
    var fileurl = pic.thumbnail_url;
    var ID = pic.ID;
    var price = pic.price;
    var info_block_summary = mapCarsLocator.settings.info_block_summary;
    var info_block_readmore = mapCarsLocator.settings.info_block_readmore;
    // var infoHtml = '<div class="clt-info__logo"><h3>' + title +'</h3>' +
    // '<div class="clt-info__body"><a href="' + url + '"><img src="'+fileurl + '" class="clt-info__img"/></a></div>' +
    // '<div class="clt-info__buttons clearfix">'+
    // '<a href="javascript:void(0);" class="btn btn-primary clt-scroll-to-listing" onclick="cltScrollToListing('+ID+');">'+info_block_summary+'</a>'+
    // '<a href="'+pic.post_url+'" class="btn btn-primary">'+info_block_readmore+'</a></div>' +
    // '</div></div>';

    var infoHtml = '<div class="slider-grid__inner slider-grid__inner_mod-a">'+
          '<a href="'+url+'">'+
          '<img width="300" height="188" src="'+fileurl+'" class="img-responsive wp-post-image" alt="">'+
          '</a>'+
          '<div class="slider-grid__wrap-name">'+
              '<span class="slider-grid__name">'+title+'</span>'+
              '<span class="slider-grid__price">'+price+'<span class="after-price-text"></span></span>'+
          '</div>'+
      '</div>';
    mapCarsLocator.infoWindow.setContent(infoHtml);
    mapCarsLocator.infoWindow.setPosition(latlng);
    mapCarsLocator.infoWindow.open(mapCarsLocator.map, marker);
  };
};

mapCarsLocator.clear = function() {
  for (var i = 0, marker; marker = mapCarsLocator.markers[i]; i++) {
    marker.setMap(null);
  }
};

mapCarsLocator.change = function() {
  mapCarsLocator.clear();
  mapCarsLocator.showMarkers();
};

mapCarsLocator.time = function() {

    var imageUrl = mapCarsLocator.settings['claster_url'];
    var mcOptions;
    if(imageUrl){
        var clusterStyles = [{
          url: mapCarsLocator.settings['claster_url'],
          textSize: mapCarsLocator.settings['claster_text_size'],
          height: mapCarsLocator.settings['claster_height'],
          width: mapCarsLocator.settings['claster_width']
        }, {
          url: mapCarsLocator.settings['claster_url'],
          textSize: mapCarsLocator.settings['claster_text_size'],
          height: mapCarsLocator.settings['claster_height'],
          width: mapCarsLocator.settings['claster_width']
        }, {
          url: mapCarsLocator.settings['claster_url'],
          textSize: mapCarsLocator.settings['claster_text_size'],
          height: mapCarsLocator.settings['claster_height'],
          width: mapCarsLocator.settings['claster_width']
        }, {
          url: mapCarsLocator.settings['claster_url'],
          textSize: mapCarsLocator.settings['claster_text_size'],
          height: mapCarsLocator.settings['claster_height'],
          width: mapCarsLocator.settings['claster_width']
        }, {
          url: mapCarsLocator.settings['claster_url'],
          textSize: mapCarsLocator.settings['claster_text_size'],
          height: mapCarsLocator.settings['claster_height'],
          width: mapCarsLocator.settings['claster_width']
        }];
      mcOptions = {
        gridSize: 52,
        styles: clusterStyles
      };
      mapCarsLocator.markerClusterer = new MarkerClusterer(mapCarsLocator.map, mapCarsLocator.markers, mcOptions);
    }else{
      mapCarsLocator.markerClusterer = new MarkerClusterer(mapCarsLocator.map, mapCarsLocator.markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }

};

// load maps
function cltInitMap() {
    cltMapSettings.forEach(function(element) {
      mapCarsLocator.init(element);
    });
    
}
(function($) {
  "use strict";
  window.cltScrollToListing = function (id) {
    var id = id || 0;
    var $element =  $('[data-id='+id+'].add-to-compare').closest('.card__img');
    $([document.documentElement, document.body]).animate({ scrollTop: $element.offset().top }, 1000);
  }

})(jQuery);
