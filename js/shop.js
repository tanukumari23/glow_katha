const PRODUCTS = [
  { id: '1', name: 'Ivory Glow Pillar Candle', price: '₹ 899', category: 'Candles', image: 'assets/p1.jpg', description: 'Hand-poured soy wax with warm vanilla notes.' },
  { id: '2', name: 'Amber Soy Jar Candle', price: '₹ 1,099', category: 'Candles', image: 'assets/p2.jpg', description: 'Long-burning amber glass, cotton wick.' },
  { id: '3', name: 'Rose Petal Wax Melts', price: '₹ 449', category: 'Wax Products', image: 'assets/p3.jpg', description: 'Delicate rose & oud blended wax melts.' },
  { id: '4', name: 'Blush Heart Wax Set', price: '₹ 599', category: 'Wax Products', image: 'assets/p4.jpg', description: 'Heart-shaped melts in blush & cream.' },
  { id: '5', name: 'Kraft Return Favour Box', price: '₹ 249', category: 'Return Gifts', image: 'assets/p5.jpg', description: 'Mini candle wrapped with satin ribbon.' },
  { id: '6', name: 'Bespoke Gift Hamper', price: '₹ 1,899', category: 'Custom Gifts', image: 'assets/p6.jpg', description: 'Curated hamper — personalised just for you.' }
];

const filters = ['All', 'Candles', 'Wax Products', 'Return Gifts', 'Custom Gifts'];
const filterWrap = document.getElementById('filters');
const grid = document.getElementById('product-grid');
const empty = document.getElementById('empty-state');

function renderFilters(active) {
  filterWrap.innerHTML = filters.map((filter) => `
    <button class="filter-btn ${filter === active ? 'active' : ''}" data-filter="${filter}">${filter}</button>
  `).join('');
}

function renderProducts(active) {
  const list = active === 'All' ? PRODUCTS : PRODUCTS.filter((item) => item.category === active);
  grid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="media">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="badge">${product.category}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta">
        <span class="price">${product.price}</span>
        <a class="btn btn-outline" target="_blank" rel="noreferrer" href="${waLink(`Hi GlowKatha! I'd like to enquire about "${product.name}" (${product.price}).`)}">Enquire on WhatsApp</a>
      </div>
    </article>
  `).join('');
  empty.style.display = list.length ? 'none' : 'block';
}

const params = new URLSearchParams(window.location.search);
let active = params.get('c');
if (!filters.includes(active)) active = 'All';

renderFilters(active);
renderProducts(active);

filterWrap.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  active = button.dataset.filter;
  const url = new URL(window.location.href);
  if (active === 'All') {
    url.searchParams.delete('c');
  } else {
    url.searchParams.set('c', active);
  }
  window.history.replaceState({}, '', url);
  renderFilters(active);
  renderProducts(active);
});
