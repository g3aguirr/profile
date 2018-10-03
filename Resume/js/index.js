$(() => {
  $("#aboutme").click(function(){
     $("#aboutme").animate({
            top: '-=310px',
            height: '100%',
            width: '100%',
            opacity: '.8',
            fontSize: '7em'
        }, 700);
         $("#aboutme").animate({
            height: 'toggle'
         }, 1000);


    setTimeout(function() {window.location = "about-me.html"}, 1700);





  });




});
