const PRODUCTS = [
  { id: '1', name: 'Teddy in Jar Candle', category: 'Baby Shower', image: 'assets/Teddy_in_jar.jpeg', description: 'Hand-poured soy wax with warm vanilla notes.' },

  { id: '2', name: 'Baby Shower theme tin jar candle', category: 'Baby Shower', image: 'assets/Baby_shower_tin_jar_candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '3', name: 'Baby shower themed wax sachet', category: 'Baby Shower', image: 'assets/Baby_shower_Theme_Wax_sachets.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  // { id: '4', name: 'Teddy Heart in Jar Candle', category: 'Baby Shower', image: 'assets/Teddy_heart_in_jar.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '5', name: 'Baby feet in short glass jar', category: 'Baby Shower', image: 'assets/Baby_shower_feet_in_short_glass_jar.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '6', name: 'Baby feet in Polycup', category: 'Baby Shower', image: 'assets/Baby_feet_in_polycup.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '7', name: 'Teddy Bear Candle', category: 'Baby Shower', image: 'assets/Teddy_Bear_Candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '8', name: 'Tealight candle', category: 'Baby Shower', image: 'assets/TeaLight_candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '9', name: 'Baby feet Tealights', category: 'Baby Shower', image: 'assets/Baby_shower_theme_tin_jar_candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },


  { id: '10', name: 'Teddy in Jumbo tealight', category: 'Baby Shower', image: 'assets/Teddy_in_jumbo_tealight.jpg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '11', name: 'Teddy on cupcake', category: 'Baby Shower', image: 'assets/Teddy_on_cupcake.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '12', name: 'Teddy Balloon Jar Candle', category: 'Baby Shower', image: 'assets/Balloon_Teddy_in_jar.jpg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '13', name: '2 Teddy in glass Jar Candle', category: 'Baby Shower', image: 'assets/2_teddy_in_one_jar.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '14', name: 'Daisy Flower Candle', category: 'Baby Shower', image: 'assets/Daisy_candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '15', name: 'Butterfly Polucup', category: 'Baby Shower', image: 'assets/Butterfly_polycup.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '16', name: 'Teddy in Jumbo Polycup', category: 'Baby Shower', image: 'assets/Teddy_in_Jumbo_polucup.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '17', name: 'Lion Candle', category: 'Baby Shower', image: 'assets/Lion_candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '18', name: 'Giraffe Candle', category: 'Baby Shower', image: 'assets/Giraffe_candle.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '19', name: 'Teddy in Candy Glass Jar', category: 'Baby Shower', image: 'assets/Teddy_in_candy_jar.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '20', name: 'Teddy and Flower in Glass Jar', category: 'Baby Shower', image: 'assets/Teddy_and_flower_in_jar.jpeg', description: 'Long-burning amber glass, cotton wick.' },

  { id: '21', name: 'Bell Jar Candles', category: 'Glass Jar Candle', image: 'assets/Bell_jar_candle.jpeg', description: 'Delicate rose & oud blended wax melts.' },

  { id: '22', name: 'Marble Glass Jar', category: 'Glass Jar Candle', image: 'assets/Marble_glass_jar.jpeg', description: 'Delicate rose & oud blended wax melts.' },

  { id: '23', name: 'Tulips in Jar', category: 'Glass Jar Candle', image: 'assets/Tulips_in_jar.jpeg', description: 'Delicate rose & oud blended wax melts.' },

  { id: '24', name: 'Glass Jars with Daisy', category: 'Glass Jar Candle', image: 'assets/Glass_jar_with_Daisy.jpeg', description: 'Delicate rose & oud blended wax melts.' },

  { id: '25', name: 'Deli Jar Candles', category: 'Glass Jar Candle', image: 'assets/Deli_jar_candle.jpeg', description: 'Delicate rose & oud blended wax melts.' },
  
  { id: '26', name: 'Short Glass Jar', category: 'Glass Jar Candle', image: 'assets/Short_glass_jar.jpg', description: 'Delicate rose & oud blended wax melts.' },

  { id: '27', name: 'Heart Wax Melts', category: 'Wax sachets/Wax melts', image: 'assets/Heart_wax_melts.jpeg', description: 'Mini candle wrapped with satin ribbon.' },
  
  { id: '28', name: 'Cloud Wax Melts', category: 'Wax sachets/Wax melts', image: 'assets/Cloud_wax_melts.jpeg', description: 'Mini candle wrapped with satin ribbon.' },

  { id: '29', name: 'Floral Vase Wax Sachets', category: 'Wax sachets/Wax melts', image: 'assets/Floral_vase_wax_sachets.png', description: 'Mini candle wrapped with satin ribbon.' },

  { id: '30', name: 'Floral Wax Sachets', category: 'Wax sachets/Wax melts', image: 'assets/Floral_wax_sachets.jpeg', description: 'Mini candle wrapped with satin ribbon.' },

  { id: '31', name: 'Dried Rose Wax Sachet', category: 'Wax sachets/Wax melts', image: 'assets/Dried_rose_wax_sachets.jpeg', description: 'Mini candle wrapped with satin ribbon.' },

  { id: '32', name: 'Wax Melts Bouquet in Concrete Jar', category: 'Bouquet Candles', image: 'assets/Wax_Melts_Bouquet_in_Concrete_Jar.jpeg', description: 'Curated hamper — personalised just for you.' },

  { id: '33', name: 'Wax Melts Bouquet in Glass Jar', category: 'Bouquet Candles', image: 'assets/Wax_Melts_Bouquet_in_Glass_Jar.jpeg', description: 'Curated hamper — personalised just for you.' },

  { id: '34', name: 'Wax Melts Bouquet in Kulhad Jar', category: 'Bouquet Candles', image: 'assets/Wax_Melts_Bouquet_in_Kulhad_Jar.jpeg', description: 'Curated hamper — personalised just for you.' },

  { id: '35', name: 'Ocean Theme in coco shell', category: 'Ocean Theme Candles', image: 'assets/Ocean_Theme_in_coco_shell.jpeg', description: 'Curated hamper — personalised just for you.' },

  { id: '36', name: 'Ocean Theme in Wooden Tub', category: 'Ocean Theme Candles', image: 'assets/Ocean_Theme_in_Wooden_Tub.jpeg', description: 'Curated hamper — personalised just for you.' },

];

const filters = ['All', 'Baby Shower', 'Glass Jar Candle', 'Wax sachets/Wax melts', 'Bouquet Candles', 'Ocean Theme Candles'];
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
      <div style='height: 94px;'>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      </div>
      
      <div class="product-meta">
  <a class="btn btn-outline" 
     style="background:green; width:100%; color:white; margin-bottom:8px;"
     target="_blank" 
     rel="noreferrer" 
     href="${waLink(`Hi GlowKatha! I'd like to enquire about '${product.name}'.`)}">
     Enquire on WhatsApp
  </a>
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
