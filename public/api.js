const api = axios.create({
<<<<<<< HEAD
  baseURL: "https://https://recados-database-stumpf1988.herokuapp.com/",
=======
  baseURL: "https://api-recados-stumpf1988.herokuapp.com/",
>>>>>>> 66e8b4592cb2ab812522e770216b317e009b9e2d
});



function sair() {
  window.location.href = "index.html";
}

//post
function cadastraRecado() {
  const descricao = document.querySelector("#recadoDescricao").value;
  const detalhamento = document.querySelector("#recadoDetalhamento").value;

  api
    .post("/recado", {
      descricao,
      detalhamento,
    })
    .then((result) => {
      const recado = result.data;
      recadoList = recado;
      alert("Recado cadastrado com sucesso!");
      mostrar(recadoList);
    })
    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });
}



//get
function mostrar() {
  api
    .get("/recado", {})
    .then((result) => {
      const el = document.getElementById("dados");
      const lista = result.data.data;

      let conteudo = "<table border = '2'>";
      
      for (const valor of lista) {
        conteudo += `<table class="table table-striped">
    <thead>
    <tr class = "text-dark">
    <th>Identificador</th>
    <th>Descrição</th>
    <th>Detalhamento</th>
    </tr>
    </thead>
    <tbody class="bg-white">
    <tr>
    <td>${valor.uid}</td> 
    <td>${valor.descricao}</td>
    <td>${valor.detalhamento}</td>
    </tr>
    </tbody>
    `;
       
      }
      conteudo += "</table>";

      el.innerHTML = conteudo;
    })

    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });
}

mostrar();


//delete
function apagar() {
  const uid = document.querySelector("#ID").value;

   api
    .delete("/recado/" + uid)
    .then((result) => {
      const recado = result.data;
      recadoList = recado;
      alert("Recado deletado com sucesso!");
      mostrar(recadoList);
    })
    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });
  
}

//put
function editar() {
  const uid = document.querySelector("#ID").value;
  const descricao = document.querySelector("#recadoDescricao").value;
  const detalhamento = document.querySelector("#recadoDetalhamento").value;

  api
    .put("/recado/" + uid, {
      descricao,
      detalhamento,
    })
    .then((result) => {
      const recado = result.data;
      recadoList = recado;
      alert("Recado alterado com sucesso!");
      mostrar(recadoList);
    })
    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });

    
}
