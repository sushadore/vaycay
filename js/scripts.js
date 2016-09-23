var jaco=0;
var london=0;
var newOrleans=0;
var parkCity=0;

$(document).ready(function() {
 $("#result button").click(function() {
    var temperature = $("input:radio[name=weather]:checked").val();
    var passport = $("input:radio[name=passport]:checked").val();
     if (temperature === "warm" && passport === "yes") {
        $("#jaco").show();
        $("#neworleans").hide();
        $("#london").hide();
        $("#parkcity").hide();
     } else if (temperature === "warm" && passport === "no") {
       $("#jaco").hide();
       $("#neworleans").show();
       $("#london").hide();
       $("#parkcity").hide();
     } else  if (temperature === "cool" && passport ==="yes"){
       $("#jaco").hide();
       $("#neworleans").hide();
       $("#london").show();
       $("#parkcity").hide();
     } else  if (temperature === "cool" && passport ==="no"){
       $("#jaco").hide();
       $("#neworleans").hide();
       $("#london").hide();
       $("#parkcity").show();
     } else {
     }

   });
});
