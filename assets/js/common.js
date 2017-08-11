$('.carousel').carousel({
  interval: 5000 //changes the speed
});

/* Display only on post pages later */
$(document).ready(function() {
  $('#flickr-photos').justifiedGallery({
    rowHeight : 300,
    lastRow : 'nojustify',
    margins : 1,
    waitThumbnailsLoad : false,
    sizeRangeSuffixes: {
      100 : '_t',
      240 : '_m',
      320 : '_n',
      500 : '',
      640 : '_z',
      1024 : '_b'
    }
  });

  $(".event").click(function(evt) {
    evt.preventDefault();
    $("#filters div").hide('slow');
    var id = $(this).attr('id');
    $("." + id).show('slow');
  });
});