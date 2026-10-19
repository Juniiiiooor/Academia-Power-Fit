// ===== Power Fit — Script =====

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Menu mobile
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Formulário de contato
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', event => {
  event.preventDefault();

  const nome = form.nome;
  const email = form.email;
  const telefone = form.telefone;
  let valid = true;

  [nome, email, telefone].forEach(field => {
    const empty = !field.value.trim();
    const badEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
    field.classList.toggle('invalid', empty || badEmail);
    if (empty || badEmail) valid = false;
  });

  if (!valid) {
    status.textContent = 'Preencha corretamente nome, e-mail e telefone.';
    status.className = 'form__status err';
    return;
  }

  status.textContent = `Obrigado, ${nome.value.trim().split(' ')[0]}! Recebemos sua mensagem e entraremos em contato em breve.`;
  status.className = 'form__status ok';
  form.reset();
});

// Animação de entrada dos elementos
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll('.plan, .feature, .schedule__card, .contact__info, .contact__form')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
