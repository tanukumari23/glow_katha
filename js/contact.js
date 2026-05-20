const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const text = `Hi GlowKatha! I'm ${name}. My email is ${email}.Message : ${message}`;
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
    form.reset();
  });
}
