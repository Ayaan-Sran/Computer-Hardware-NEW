// Sample hardware options
const hardwareOptions = {
    cpu: [
        { name: "Intel Core i7-10700K", price: 350 },
        { name: "AMD Ryzen 9 5900X", price: 550 },
        { name: "Intel Core i9-10900K", price: 500 },
    ],
    gpu: [
        { name: "NVIDIA GeForce RTX 3080", price: 800 },
        { name: "AMD Radeon RX 6800 XT", price: 650 },
        { name: "NVIDIA GeForce RTX 3070", price: 500 },
    ],
    ram: [
        { name: "Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3200MHz", price: 150 },
        { name: "G.Skill Trident Z Neo 32GB (2x16GB) DDR4 3600MHz", price: 250 },
        { name: "Crucial Ballistix 32GB (2x16GB) DDR4 3200MHz", price: 200 },
    ],
    storage: [
        { name: "Samsung 970 EVO Plus 1TB NVMe SSD", price: 200 },
        { name: "Seagate Barracuda 2TB HDD", price: 100 },
        { name: "WD Blue SN550 500GB NVMe SSD", price: 80 },
    ]
};

// Function to populate hardware options
function populateOptions(category, elementId) {
    const categoryOptions = hardwareOptions[category];
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    categoryOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'hardware-option';
        optionElement.innerHTML = `
            <button onclick="toggleSelection(this, ${option.price})">${option.name} - $${option.price}</button>
        `;
        element.appendChild(optionElement);
    });
}

// Function to toggle selection
function toggleSelection(button, price) {
    const isSelected = button.classList.contains('selected');
    const totalElement = document.getElementById('total-cost');
    let totalCost = parseFloat(totalElement.textContent);
    
    if (isSelected) {
        button.classList.remove('selected');
        totalCost -= price;
    } else {
        const selectedButtons = document.querySelectorAll('.hardware-option button.selected');
        selectedButtons.forEach(selectedButton => {
            selectedButton.classList.remove('selected');
        });
        button.classList.add('selected');
        totalCost = price; // Set totalCost to price if selecting a new option
    }

    totalElement.textContent = totalCost.toFixed(2);
}

// Function to reset selections and total cost
function resetSelections() {
    const selectedButtons = document.querySelectorAll('.hardware-option button.selected');
    selectedButtons.forEach(selectedButton => {
        selectedButton.classList.remove('selected');
    });
    document.getElementById('total-cost').textContent = '0.00';
}

// Populate hardware options
populateOptions('cpu', 'cpu');
populateOptions('gpu', 'gpu');
populateOptions('ram', 'ram');
populateOptions('storage', 'storage');