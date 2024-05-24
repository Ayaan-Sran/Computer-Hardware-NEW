// script.js
function calculateTotal() {
    var cpuPrice = parseInt(document.getElementById("cpu").value);
    var gpuPrice = parseInt(document.getElementById("gpu").value);
    var ramPrice = parseInt(document.getElementById("ram").value);
  
    var total = cpuPrice + gpuPrice + ramPrice;
  
    document.getElementById("totalCost").textContent = "$" + total;
  }