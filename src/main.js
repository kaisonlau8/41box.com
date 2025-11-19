import cars from './data/cars.json';

// Helper to create car card HTML
function createCarCard(car) {
    return `
    <div class="car-card">
      <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image" loading="lazy">
      <div class="car-info">
        <div class="car-brand">${car.brand}</div>
        <h3 class="car-model">${car.model}</h3>
        <div class="car-price">${car.price}</div>
        <div class="car-specs">
          <span>${car.year}</span>
          <span>•</span>
          <span>${car.mileage}</span>
          <span>•</span>
          <span>${car.fuel}</span>
        </div>
      </div>
    </div>
  `;
}

// Render Featured Cars (Home Page)
const featuredContainer = document.getElementById('featured-cars');
if (featuredContainer) {
    // Show first 3 cars
    const featuredCars = cars.slice(0, 3);
    featuredContainer.innerHTML = featuredCars.map(createCarCard).join('');
}

// Render Inventory (Inventory Page)
const inventoryContainer = document.getElementById('inventory-grid');
const filterButtons = document.querySelectorAll('#filters button');

if (inventoryContainer) {
    // Initial render
    renderInventory(cars);

    // Filter logic
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const filteredCars = filter === 'all'
                ? cars
                : cars.filter(car => car.brand === filter);

            renderInventory(filteredCars);
        });
    });
}

function renderInventory(items) {
    inventoryContainer.innerHTML = items.map(createCarCard).join('');
}
