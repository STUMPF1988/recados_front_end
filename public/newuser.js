
var lista = JSON.parse(localStorage.getItem("listaUser") || "[]");
var indiceUpdate = undefined;

function criarConta() {
  const usuario = document.querySelector("#usuario").value;
  const senha1 = document.querySelector("#password1").value;
  const senha2 = document.querySelector("#password2").value;

  
  let userValid = {
    user: "",
  };

  lista.forEach((item) => {
    if (usuario == item.usuario) {
      userValid = {
        user: item.usuario,
      };
    }
  });

  if (usuario == userValid.user) {
    alert("USUÁRIO JÁ EXISTE!");
  } else if (!usuario || !senha1 || !senha2) {
    alert("INFORME TODOS OS DADOS!");
  } else if (senha1 !== senha2) {
    alert("AS SENHAS NÃO CONFEREM!");
  } else if (indiceUpdate) {
    const objeto = lista[indiceUpdate];
    objeto.usuario = usuario;
    objeto.password = senha1;
    objeto.password2 = senha2;
  } else {
    lista.push({
      usuario: usuario,
      password: senha1,
      password2: senha2,
    });
  }

  salvar();

  indiceUpdate = undefined;
}

function salvar() {
  const valor = JSON.stringify(lista);
  localStorage.setItem("listaUser", valor);
  window.location.href = "index.html";
}
