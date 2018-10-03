$(() => {
  $("li").hover(function(){
       $(this).css("background-color", "#2062CB");
       }, function(){
       $(this).css("background-color", "black");
   });
});
