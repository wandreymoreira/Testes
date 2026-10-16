(() => {
  'use strict';

  // Seleciona os elementos com as classes corretas do seu novo HTML
  const botao = document.querySelector('.botao-menu');
  const menu = document.querySelector('.menu-principal');

  // Se algum elemento não existir, o script para sem gerar erro no console
  if (!botao || !menu) return;

  // Seleciona a tag do ícone do Font Awesome que está dentro do botão
  const iconeBotao = botao.querySelector('.fa-solid');

  // Precisa ser o MESMO valor do @media (min-width: ...) do seu CSS
  const breakpointDesktop = window.matchMedia('(min-width: 870px)');

  const abrirMenu = () => {
    menu.classList.add('open');
    botao.setAttribute('aria-expanded', 'true');
    botao.setAttribute('aria-label', 'Fechar menu');
    
    // Troca o ícone de barras (hambúrguer) para o ícone de "X" (fechar)
    if (iconeBotao) {
      iconeBotao.classList.remove('fa-bars');
      iconeBotao.classList.add('fa-xmark');
    }
  };

  const fecharMenu = () => {
    menu.classList.remove('open');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
    
    // Troca o ícone de "X" de volta para o ícone de barras
    if (iconeBotao) {
      iconeBotao.classList.remove('fa-xmark');
      iconeBotao.classList.add('fa-bars');
    }
  };

  // Abre/fecha pelo botão
  botao.addEventListener('click', () => {
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';
    estaAberto ? fecharMenu() : abrirMenu();
  });

  // Fecha ao clicar em um link do menu
  menu.addEventListener('click', (evento) => {
    if (evento.target.closest('.menu-link')) fecharMenu();
  });

  // Fecha ao clicar fora do menu (ignora se o clique for no próprio botão ou dentro do menu)
  document.addEventListener('click', (evento) => {
    const clicouNoBotao = evento.target.closest('.botao-menu');
    const clicouNoMenu = evento.target.closest('.menu-principal');
    
    if (!clicouNoBotao && !clicouNoMenu) {
      fecharMenu();
    }
  });

  // Fecha com Esc e devolve o foco ao botão
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('open')) {
      fecharMenu();
      botao.focus();
    }
  });

  // Se a tela virar desktop, reseta o estado do menu
  breakpointDesktop.addEventListener('change', (evento) => {
    if (evento.matches) fecharMenu();
  });
})();
