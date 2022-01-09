<<<<<<< HEAD

var lista = JSON.parse(localStorage.getItem("listaUser") || "[]");
var indiceUpdate = undefined;

//se tiver valor no localstorage, vai recuperar e adicionar a essa lista transformando a string em objeto
//const recupera = localStorage.getItem("Logar");
//if (recupera) {
 // lista = JSON.parse(recupera);
//}


function criarConta() {
  const usuario = document.querySelector('#usuario').value;
  const senha1 = document.querySelector('#password1').value;
  const senha2 = document.querySelector('#password2').value;

  if (!usuario || !senha1 || !senha2) {
    alert("INFORME TODOS OS DADOS!");
  }

  if (senha1 !== senha2) {
    alert("AS SENHAS NÃO CONFEREM!");
  }

  let userValid = {
    user: ""};
    
  lista.forEach((item) => {
    if (usuario == item.usuario) {
      userValid = {
        user: item.usuario,
      };
    }
  });


  if (usuario == userValid.user) {
    alert("USUÁRIO JÁ EXISTE!");
  } else if(indiceUpdate) {
=======
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
>>>>>>> 66e8b4592cb2ab812522e770216b317e009b9e2d
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
<<<<<<< HEAD
=======

  salvar();
>>>>>>> 66e8b4592cb2ab812522e770216b317e009b9e2d

  salvar();
  
  indiceUpdate = undefined;
<<<<<<< HEAD
/*
  document.getElementById("usuario").value = "";
  document.getElementById("password").value = "";
  document.getElementById("password2").value = "";
  */
=======
>>>>>>> 66e8b4592cb2ab812522e770216b317e009b9e2d
}

function salvar() {
  const valor = JSON.stringify(lista);
  localStorage.setItem("listaUser", valor);
  window.location.href = "index.html";
}
<<<<<<< HEAD


=======
>>>>>>> 66e8b4592cb2ab812522e770216b317e009b9e2d
