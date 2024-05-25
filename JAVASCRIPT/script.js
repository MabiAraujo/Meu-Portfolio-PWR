function btn_form() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var datanasc = document.getElementById("datanasc").value;
  var mensagem = document.getElementById("mensagem").value;

  var mensagensErro = [];

  if (nome === "") {
      mensagensErro.push("Preencha o campo Nome Completo.");
  }
  if (email === "") {
      mensagensErro.push("Preencha o campo Email.");
  }

  if (datanasc === "") {
      mensagensErro.push("Preencha o campo Data de Nascimento.");
  }

  if (mensagem === "") {
      mensagensErro.push("Preencha o campo Seu comentário.");
  }

  if (mensagensErro.length > 0) {
      alert(mensagensErro.join("\n"));
      return false;
  } else {
      alert("Formulário enviado. Retornaremos em até 48h úteis.");
      return true;
  }
}