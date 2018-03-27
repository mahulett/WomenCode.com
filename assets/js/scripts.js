$('.links-tile').hover(
  function() {
    $(this).find('svg').addClass('animated rubberBand');
  }, function() {
    $(this).find('svg').removeClass('animated rubberBand');
  }
);