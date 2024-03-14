function validar() {
    console.log("teste");


    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const nasc = document.getElementById("nasc");
    const curso = document.getElementById("curso");
    const matutino = document.getElementById("matutino");
    const vespertino = document.getElementById("vespertino");
    const noturno = document.getElementById("noturno");


    if (nome.value == "") {
        document.getElementById("nome").focus();
        alert("Não deixe o campo nome vazio.");
        return false;
    }

    if (sobrenome.value == "") {
        document.getElementById("sobrenome").focus();
        alert("Não deixe o campo sobrenome vazio.");
        return false;
    }

    if (nasc.value == "") {
        document.getElementById("nasc").focus();
        alert("Não deixe o campo ano de nascimento vazio.");
        return false;
    }

    if (curso.value == "") {
        document.getElementById("curso").focus();
        alert("Não deixe o campo curso vazio.");
        return false;
    }

    if (!matutino.checked && !vespertino.checked && !noturno.checked) {
        alert("Erro: nenhum turno selecionado!");
        matutino.focus();
        document.getElementById("avisos").innerHTML = "Campo periodo não pode ficar em branco!"; 
        return false;
    }
    else {
        document.getElementById("avisos").innerHTML = "Seu Nome: " + nome.value + ", Sobrenome: " + sobrenome.value + ", Ano de Nascimento: " + nasc.value + ", Profissão: " + curso.value; 
        return false;
    }

    alert("Sucesso");    
}