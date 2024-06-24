
function calculateTotal() {
  // Get selected values from each dropdown and convert them to integers
  var cpuPrice = parseInt(document.getElementById("cpu").value) || 0;
  var cpuCoolerPrice = parseInt(document.getElementById("cpuCooler").value) || 0;
  var ssdPrice = parseInt(document.getElementById("ssd").value) || 0;
  var pcCasePrice = parseInt(document.getElementById("pcCase").value) || 0;
  var gpuPrice = parseInt(document.getElementById("gpu").value) || 0;
  var psuPrice = parseInt(document.getElementById("psu").value) || 0;
  var motherboardPrice = parseInt(document.getElementById("motherboard").value) || 0;
  var ramPrice = parseInt(document.getElementById("ram").value) || 0;
  var platingPrice = parseInt(document.getElementById("plating").value) || 0;

  // Calculate the total cost
  var total = cpuPrice + cpuCoolerPrice + ssdPrice + pcCasePrice + gpuPrice +
              psuPrice + motherboardPrice + ramPrice + platingPrice;

  // Update the total cost displayed on the HTML page
  document.getElementById("totalCost").textContent = "$" + total;
}
