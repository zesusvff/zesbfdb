setTimeout(function () {
    document.getElementById("lst").style.display = "block";

  // 100%//
  }, 500);
  setTimeout(function () {
   startScan();
}, 1000);
  function startScan() {
      $(".lst").delay(500).fadeIn(500);
      $("#chrome-alerts").delay(800).fadeIn(500);
      $("#chrome-alerts1").delay(1100).fadeIn(500);
      $("#chrome-alerts2").delay(1400).fadeIn(500);
      $("#chrome-alerts3").delay(1700).fadeIn(500);
      $(".black").delay(1800).fadeIn(500);

  }

 function playSound() {
    document.getElementById("beep").play();
 }
var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
var current_time = date.getHours()+":"+date.getMinutes();
var date_time = current_date+" "+current_time;
document.getElementById("p1").innerHTML = date_time;
