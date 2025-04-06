// how 2 code, number 1 take code from stack overflow https://stackoverflow.com/questions/542938/how-to-calculate-number-of-days-between-two-dates/46529159#46529159

var dateofdestruction = "2025-03-29";
var fixed = true;
var deusexmachina = "2025-04-06";

// JavaScript / NodeJs answer
var startDate = new Date(dateofdestruction);
var endDate = new Date();
if (fixed == true) {
  endDate = new Date(deusexmachina);
}

var difference = endDate.getTime() - startDate.getTime();

var TotalDiffDays = Math.ceil(difference / (1000 * 3600 * 24));
document.addEventListener("DOMContentLoaded", function () {
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
});
