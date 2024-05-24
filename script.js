const cpuSelect = document.getElementById("cpu");
const gpuSelect = document.getElementById("gpu");
const ramSelect = document.getElementById("ram");
const storageSelect = document.getElementById("storage");
const motherboardSelect = document.getElementById("motherboard");
const caseSelect = document.getElementById("case");
const ledSelect = document.getElementById("led");
const coolingSelect = document.getElementById("cooling");
const totalSpan = document.getElementById("total");

let totalCost = 0;

cpuSelect.addEventListener("change", updateTotal);
gpuSelect.addEventListener("change", updateTotal);
ramSelect.addEventListener("change", updateTotal);
storageSelect.addEventListener("change", updateTotal);
motherboardSelect.addEventListener("change", updateTotal);
caseSelect.addEventListener("change", updateTotal);
ledSelect.addEventListener("change", updateTotal);
coolingSelect.addEventListener("change", updateTotal);

function updateTotal() {
    const cpuCost = parseInt(cpuSelect.value);
    const gpuCost = parseInt(gpuSelect.value);
    const ramCost = parseInt(ramSelect.value);
    const storageCost = parseInt(storageSelect.value);
    const motherboardCost = parseInt(motherboardSelect.value);
    const caseCost = parseInt(caseSelect.value);
    const ledCost = parseInt(ledSelect.value);
    const coolingCost = parseInt(coolingSelect.value);

    totalCost = cpuCost + gpuCost + ramCost + storageCost + motherboardCost + caseCost + ledCost + coolingCost;
    totalSpan.textContent = totalCost;
}