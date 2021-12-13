(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 


  // let options = {
  //   startAngle: -1.55,
  //   size: 127,
  //   value: 0.85,
  //   fill: {
  //     gradient: ['black', 'blue']
  //   }
  // }
  // $(".progres__circle .progres__bar").circleProgress(options).on('circle-animation-progress',
  //   function (event, progress, stepValue) {
  //     $(this).parent().find(".progres__percent").text(String(stepValue.toFixed(2).substr(2)) + "%");
  //   });
  // $(".js .progres__bar").circleProgress({
  //   value: 0.70   
  // });
  // $(".react .progres__bar").circleProgress({
  //   value: 0.60
  // });

  $('.testimonial__row').slick({
    dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});