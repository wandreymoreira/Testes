
const botaoMenu = document.querySelector(".botao-menu");
const navegacao = document.querySelector(".navegacao");
const links = document.querySelectorAll(".navegacao a");

function setMenu(menuAberto) {
    navegacao.classList.toggle("menu-aberto", menuAberto);

    botaoMenu.setAttribute("aria-expanded", menuAberto);

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );

    botaoMenu.textContent = menuAberto ? "✕" : "☰";
}

botaoMenu.addEventListener("click", () => {
    setMenu(!navegacao.classList.contains("menu-aberto"));
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        setMenu(false);
    });
});
