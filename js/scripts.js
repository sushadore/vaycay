var jaco=0;
var london=0;
var newOrleans=0;
var parkCity=0;

$(document).ready(function() {
 $("#temp button").click(function() {
    var temperature = $("input:radio[name=weather]:checked").val();
     if (temperature === "warm") {
       return jaco += 1;
     } else {
       london += 1;
     }

   });
});
