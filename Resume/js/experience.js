$(() => {
  let personal = $("#personaltext").html();
  let professional = $("#professionaltext").html();
  $("#csminor").click(function(){
    $("#code").toggle(1000);
    $("#csminortext").toggle(1000);
  });
  $("#csmajor").click(function(){
    $("#code").hide(1000);
    $("#csminortext").show(1000);
    $("#hci").toggle(1000);
    $("#csmajortext").toggle(1000);
  });
  $( "#adventure" ).click(function(){
    $("#code").hide(1000);
    $("#csminortext").show(1000);
    $("#hci").hide(1000);
    $("#csmajortext").show(1000);
    $("#vr").toggle(1000);
    $("#adventuretext").toggle(1000);
  });
  $("li").hover(function(){
       $(this).css("background-color", "#2062CB");
       }, function(){
       $(this).css("background-color", "black");
   });
});
