const SITE = {
  brand: 'GlowKatha',
  tagline: 'Handcrafted Premium Gifts & Return Favours',
  whatsapp: '+917838655605',
  instagram: 'https://instagram.com/glowkatha',
  email: 'hello@glowkatha.com',
  location: 'Mumbai, India'
};

const waLink = (message = "Hi GlowKatha! I'd love to enquire about your gifts.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

window.SITE = SITE;
window.waLink = waLink;
