(() => {
  'use strict';

  const botao = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  // Se algum elemento não existir, o script para sem gerar erro no console
  if (!botao || !menu) return;

  // Precisa ser o MESMO valor do @media (min-width: ...) do seu CSS
  const breakpointDesktop = window.matchMedia('(min-width: 768px)');

  const abrirMenu = () => {
    menu.classList.add('open');
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu');
    botao.textContent = '✕';
  };

  const fecharMenu = () => {
    menu.classList.remove('open');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
    botao.textContent = '☰';
  };

  // Abre/fecha pelo botão
  botao.addEventListener('click', () => {
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';
    estaAberto ? fecharMenu() : abrirMenu();
  });

  // Fecha ao clicar em um link do menu
  menu.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) fecharMenu();
  });

  // Fecha ao clicar fora do menu
  document.addEventListener('click', (evento) => {
    if (!evento.target.closest('.menu')) fecharMenu();
  });

  // Fecha com Esc e devolve o foco ao botão
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('open')) {
      fecharMenu();
      botao.focus();
    }
  });

  // Se a tela virar desktop (ou o celular girar), reseta o estado do menu
  breakpointDesktop.addEventListener('change', (evento) => {
    if (evento.matches) fecharMenu();
  });
})();