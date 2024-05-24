// script.js
function calculateTotal() {
  var cpuPrice = parseInt(document.getElementById("cpu").value);
  var cpuCoolerPrice = parseInt(document.getElementById("cpuCooler").value);
  var ssdPrice = parseInt(document.getElementById("ssd").value);
  var pcCasePrice = parseInt(document.getElementById("pcCase").value);
  var gpuPrice = parseInt(document.getElementById("gpu").value);
  var psuPrice = parseInt(document.getElementById("psu").value);
  var motherboardPrice = parseInt(document.getElementById("motherboard").value);
  var ramPrice = parseInt(document.getElementById("ram").value);
  var platingPrice = parseInt(document.getElementById("plating").value);

  var total = cpuPrice + cpuCoolerPrice + ssdPrice + pcCasePrice + gpuPrice + psuPrice + motherboardPrice + ramPrice + platingPrice;

  document.getElementById("totalCost").textContent = "$" + total;
}
