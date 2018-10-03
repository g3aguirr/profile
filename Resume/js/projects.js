$(() => {
  $("li").not( "#slash" ).hover(function(){
       $(this).css("background-color", "#2062CB");
       }, function(){
       $(this).css("background-color", "black");
   });
   $(".projects").hover(function(){
        $(this).css("background-color", "#2062CB");
        }, function(){
        $(this).css("background-color", "rgba(22,22,22,.9)");
    });
   $("#project_1").click(function(){
     $("#projectpic_1").toggle(1000);
      $("#project_p_1").toggle(1000);
   });
   $("#project_2").click(function(){
     $("#projectpic_2").toggle(1000);
      $("#project_p_2").toggle(1000);
   });
   $("#project_3").click(function(){
     $("#projectpic_3").toggle(1000);
      $("#project_p_3").toggle(1000);
   });
   $("#project_4").click(function(){
     $("#projectpic_4").toggle(1000);
      $("#project_p_4").toggle(1000);
   });
});
