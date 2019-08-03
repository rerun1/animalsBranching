var imgId = "x";

$(document).ready(function(){



  $("img").click(function () {
      // var userSelect = (this.id);

      imgId = (this.id);


      if (imgId === "krakenImage"){
        $("div#krakenInfo").show();
        $("div#otterInfo").hide();
        $("div#wormInfo").hide();
      } else if (imgId === "otterImage"){
        $("div#otterInfo").show();
        $("div#krakenInfo").hide();
        $("div#wormInfo").hide();
      } else {
        $("div#wormInfo").show();
        $("div#krakenInfo").hide();
        $("div#otterInfo").hide();
      }

      $("div.clickInstruction").hide();


  });

console.log(imgId);

});
