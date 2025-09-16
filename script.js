document.addEventListener("DOMContentLoaded", function () {
  // how 2 code, number 1 take code from stack overflow https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates/46529159#46529159

  var dateofdestruction = "2025-09-14";
  var fixed = false;
  var deusexmachina = "2025-08-15";

  // JavaScript / NodeJs answer
  var startDate = new Date(dateofdestruction);
  var endDate = new Date();
  if (fixed == true) {
    endDate = new Date(deusexmachina);
  }

  var difference = endDate.getTime() - startDate.getTime();

  var TotalDiffDays = Math.ceil(difference / (1000 * 3600 * 24));

  // make request (this is broken because CORS)
  /*
  var pingedktomo = false;
  var ktomoup = false;
  var ping = new XMLHttpRequest();
  var ktomoendpoint = "https://ktp.kaeru.world/v1/player/get_player_data";

  ping.open("GET", ktomoendpoint, true);
  ping.setRequestHeader(
    "User-Agent",
    "Is Kaerutomo Up? PicelBoi http://iskaerutomoup.picelboi.xyz"
  );
  ping.onreadystatechange = function () {
    console.log("APESHIT");
    if (ping.readyState == XMLHttpRequest.DONE) {
      pingedktomo = true;
    }

    if (
      ping.readyState == XMLHttpRequest.DONE &&
      ping.status >= 200 &&
      ping.status < 500
    ) {
      ktomoup = true;
    }
  };
  ping.send(); */

  document.getElementById("counter").textContent =
    "It has been " + TotalDiffDays + " days since Kaerutomo stopped working.";

  document.getElementById("dateofdestruction").textContent =
    "(last broke at " + dateofdestruction + ".)";

  if (fixed == true) {
    document.getElementById("counter").textContent =
      "Kaerutomo was down for " + TotalDiffDays + " days.";

    document.getElementById("dateofdestruction").textContent =
      "(last broke at " +
      dateofdestruction +
      ", was fixed on " +
      deusexmachina +
      ".)";
  }

  statusElement = document.getElementById("isup");
  asofElement = document.getElementById("asof");
  if (pingedktomo == true) {
    asofElement.textContent(
      "As of now because this site just used your browser to ping Kaerutomo to see if it's up or not"
    );
    if (ktomoup == true) {
      statusElement.textContent("YES!!! :D");
    } else {
      statusElement.textContent("NO!");
    }
  }
});
