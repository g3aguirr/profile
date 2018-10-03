$(() => {
  let personal = $("#personaltext").html();
  let professional = $("#professionaltext").html();
  $("#profbutt").click(function(){
    $("#professionaltext").hide().html(professional).fadeIn(2000);
  });
  $("#persbutt").click(function(){
    $("#professionaltext").hide().html(personal).fadeIn(2000);
  });
  $("li").not( "#slash" ).hover(function(){
       $(this).css("background-color", "#2062CB");
       }, function(){
       $(this).css("background-color", "black");
   });
});
