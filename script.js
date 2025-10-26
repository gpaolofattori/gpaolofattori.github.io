document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    status.textContent = 'Per favore compila tutti i campi.'; 
    return;
  }
  status.textContent = 'Invio in corso...';
  setTimeout(()=>{
    status.textContent = 'Messaggio inviato! Ti risponderemo all\'indirizzo ' + email + ' quanto prima.';
    form.reset();
  },800);
});

