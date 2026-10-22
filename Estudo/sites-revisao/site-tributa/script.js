document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nome = document.getElementById("name");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");
    const tipoEmpresa = document.getElementById("tipo-empresa");
    const mensagem = document.getElementById("mensagem");
    const aceite = document.getElementById("aceite-termos");

    // Função que aplica as suas mensagens personalizadas de erro
    function aplicarValidacaoCustomizada() {
        
        // 1. Erro para campos obrigatórios comuns (Nome, Telefone, Empresa, Mensagem)
        const camposObrigatorios = [nome, telefone, tipoEmpresa, mensagem];
        camposObrigatorios.forEach(campo => {
            if (campo && campo.validity.valueMissing) {
                campo.setCustomValidity("Preencha este campo.");
            }
        });

        // 2. Erros customizados para o E-mail
        if (email) {
            if (email.validity.valueMissing) {
                email.setCustomValidity("Preencha este campo.");
            } else if (email.validity.typeMismatch) {
                email.setCustomValidity("Digite um e-mail válido, como nome@email.com.");
            }
        }

        // 3. Erro customizado para o Checkbox (Aceite)
        if (aceite && aceite.validity.valueMissing) {
            aceite.setCustomValidity("Para enviar, marque a caixa de concordância.");
        }
    }

    // Executa a validação toda vez que o usuário clica em enviar
    form.addEventListener("submit", function (event) {
        // Remove validações antigas antes de testar
        nome.setCustomValidity("");
        email.setCustomValidity("");
        telefone.setCustomValidity("");
        tipoEmpresa.setCustomValidity("");
        mensagem.setCustomValidity("");
        aceite.setCustomValidity("");

        aplicarValidacaoCustomizada();

        // Se o formulário não for válido, o navegador mostra os balões com seus textos
        if (!form.checkValidity()) {
            event.preventDefault(); // Impede o envio se houver erros
        } else {
            // Se tudo estiver correto, impede o recarregamento real da página para simular o sucesso
            event.preventDefault(); 
            
            // Exibe a sua mensagem de sucesso personalizada
            alert("Recebemos a sua mensagem! Em breve, um contador entrará em contato.");
            
            form.reset(); // Limpa o formulário após o envio bem-sucedido
        }
    });
});
