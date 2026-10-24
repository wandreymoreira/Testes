(() => {
  'use strict';

  const botao = document.querySelector('#btn-menu');
  const menu = document.querySelector('#menu-navegacao');

  // Interrompe o script se os elementos não existirem
  if (!botao || !menu) return;

  const iconeBotao = botao.querySelector('.fa-solid');

  // Deve corresponder ao breakpoint usado no CSS
  const breakpointDesktop = window.matchMedia('(min-width: 870px)');

  const abrirMenu = () => {
    menu.classList.add('open');
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu');

    if (iconeBotao) {
      iconeBotao.classList.remove('fa-bars');
      iconeBotao.classList.add('fa-xmark');
    }
  };

  const fecharMenu = () => {
    menu.classList.remove('open');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');

    if (iconeBotao) {
      iconeBotao.classList.remove('fa-xmark');
      iconeBotao.classList.add('fa-bars');
    }
  };

  // Abre ou fecha o menu pelo botão
  botao.addEventListener('click', () => {
    const estaAberto =
      botao.getAttribute('aria-expanded') === 'true';

    if (estaAberto) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  // Fecha ao clicar em um link da navegação
  menu.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) {
      fecharMenu();
    }
  });

  // Fecha ao clicar fora do botão e do menu
  document.addEventListener('click', (evento) => {
    const clicouNoBotao = evento.target.closest('#btn-menu');
    const clicouNoMenu = evento.target.closest('#menu-navegacao');

    if (!clicouNoBotao && !clicouNoMenu) {
      fecharMenu();
    }
  });

  // Fecha com Escape e devolve o foco ao botão
  document.addEventListener('keydown', (evento) => {
    if (
      evento.key === 'Escape' &&
      botao.getAttribute('aria-expanded') === 'true'
    ) {
      fecharMenu();
      botao.focus();
    }
  });

  // Fecha o menu ao entrar no breakpoint desktop
  breakpointDesktop.addEventListener('change', (evento) => {
    if (evento.matches) {
      fecharMenu();
    }
  });
})();
