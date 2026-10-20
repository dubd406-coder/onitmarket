const categories = [
  { name: "Electronics", emoji: "📱", description: "Phones, gadgets, and accessories." },
  { name: "Home Goods", emoji: "🏠", description: "Furniture, decor, and everyday essentials." },
  { name: "Vehicles", emoji: "🚗", description: "Cars, bikes, scooters, and tools." },
  { name: "Fashion", emoji: "👕", description: "Clothing, shoes, and personal style." },
  { name: "Family", emoji: "🧸", description: "Kids, nursery, and everyday family needs." },
  { name: "Office", emoji: "💼", description: "Work gear, desks, and productivity picks." },
  { name: "Pets", emoji: "🐾", description: "Pet supplies, care, and accessories." },
  { name: "Services", emoji: "🛠️", description: "Local help, repairs, and skilled work." }
];

const listings = [
  {
    title: "Mountain Bike",
    price: "$420",
    location: "2 miles away",
    condition: "Excellent",
    category: "sport"
  },
  {
    title: "Modern Coffee Table",
    price: "$180",
    location: "1.5 miles away",
    condition: "Like new",
    category: "home"
  },
  {
    title: "MacBook Air M2",
    price: "$980",
    location: "4 miles away",
    condition: "Barely used",
    category: "tech"
  },
  {
    title: "Leather Travel Bag",
    price: "$85",
    location: "3 miles away",
    condition: "Gently used",
    category: "accessory"
  },
  {
    title: "Golden Retriever Dog Bed",
    price: "$55",
    location: "7 miles away",
    condition: "Good condition",
    category: "pet"
  },
  {
    title: "Washer & Dryer Set",
    price: "$640",
    location: "5 miles away",
    condition: "Works perfectly",
    category: "appliance"
  }
];

const categoriesGrid = document.getElementById('categories-grid');
const featuredListings = document.getElementById('featured-listings');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (categoriesGrid) {
  categoriesGrid.innerHTML = categories
    .map(
      (category) => `
        <article class="category-card">
          <div class="category-visual" aria-hidden="true">${category.emoji}</div>
          <div class="category-content">
            <h3>${category.name}</h3>
            <p>${category.description}</p>
          </div>
        </article>
      `
    )
    .join('');
}

if (featuredListings) {
  featuredListings.innerHTML = listings
    .map(
      (item) => `
        <article class="listing-card">
          <div class="listing-thumb ${item.category}" aria-hidden="true"></div>
          <div class="listing-body">
            <div class="listing-top">
              <span class="tag">Featured</span>
              <span class="listing-price">${item.price}</span>
            </div>
            <h3 class="listing-title">${item.title}</h3>
            <div class="listing-location">${item.location}</div>
            <div class="listing-meta-row">
              <span>${item.condition}</span>
              <span>Local</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

const navButtons = document.querySelectorAll('.btn');
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent.includes('Browse')) {
      document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (button.textContent.includes('Sell')) {
      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
