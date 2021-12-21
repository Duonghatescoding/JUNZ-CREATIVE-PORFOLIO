

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
	responsive:{
        0:{
            items:1
        }
		,
		474:{
			items:1
		}
		,
		600:{
			items:1
		},
    1023:{
      item: 1
    }
    }
});

jQuery(document).ready(function($) {
    $(".owl-carousel").each(function(index, el) {
      var containerHeight = $(el).height();
      $(el).find("img").each(function(index, img) {
        var w = $(img).prop('naturalWidth');
        var h = $(img).prop('naturalHeight');
        $(img).css({
          'width': Math.round(containerHeight * w / h) + 'px',
          'height': containerHeight + 'px'
        });
      }),
      $(el).owlCarousel({
        autoWidth: false
      });
    });
  });
    