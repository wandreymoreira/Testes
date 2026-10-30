(() => {
  'use strict';

  const botao = document.querySelector('.header__menu-btn');
  const menu = document.querySelector('.header__nav');

  if (!botao || !menu) return;

  const breakpointDesktop = window.matchMedia('(min-width: 870px)');

  const abrirMenu = () => {
    menu.classList.add('header__nav--open');
    botao.classList.add('header__menu-btn--active'); // Ativa o estado do botão
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu');
  };

  const fecharMenu = () => {
    menu.classList.remove('header__nav--open');
    botao.classList.remove('header__menu-btn--active'); // Remove o estado do botão
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
  };

  botao.addEventListener('click', () => {
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';
    if (estaAberto) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  menu.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) {
      fecharMenu();
    }
  });

  document.addEventListener('click', (evento) => {
    const clicouNoBotao = evento.target.closest('.header__menu-btn');
    const clicouNoMenu = evento.target.closest('.header__nav');

    if (!clicouNoBotao && !clicouNoMenu) {
      fecharMenu();
    }
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
      fecharMenu();
      botao.focus();
    }
  });

  breakpointDesktop.addEventListener('change', (evento) => {
    if (evento.matches) {
      fecharMenu();
    }
  });
})();