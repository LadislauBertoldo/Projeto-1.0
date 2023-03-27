const form = document.getElementById('fomulario');

function ValidaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeCompleto = document.getElementById('nome-completo');
    const nomeEmail = document.getElementById('e-mail');
    const nomeTel = document.getElementById('telefone-contato');
    const nomeDesc = document.getElementById('texto-contato');
    const mensagemSucesso = `Obrigado pelo seu feedback ${nomeCompleto.value}`;

    formEValido = ValidaNome(nomeCompleto.value)
    if(formEValido) {
        alert (mensagemSucesso);

        nomeCompleto.value = '';
        nomeEmail.value = '';
        nomeTel.value = '';
        nomeDesc.value = '';
    } else {
        alert("Formulário está incorreto");
    }
})

console.log(form);