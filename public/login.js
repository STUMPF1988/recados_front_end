function entrar() {
  let usuario = document.querySelector("#usuario");

  let password = document.querySelector("#password");

  let listaUser = [];

  let userValid = {
    user: "",
    pass: "",
    pass2: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

  listaUser.forEach((item) => {
    if (usuario.value == item.usuario && password.value == item.password) {
      userValid = {
        user: item.usuario,
        pass: item.password,
        pass2: item.password2,
      };
    }
  });

  if (
    usuario.value == userValid.user &&
    password.value == userValid.pass &&
    userValid.user != ""
  ) {
    window.location.href = "recados.html";

    let token = Math.random().toString(16).substr(2);
    localStorage.setItem("token", token);
  } else {
    alert("Usuário e/ou senha inválidos!");
  }
}
