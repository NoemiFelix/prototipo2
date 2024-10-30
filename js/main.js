document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aqui você pode adicionar lógica para enviar os dados para um servidor ou processá-los de outra forma
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Cadastro realizado com sucesso! Nome: ${username}, Password: ${password}`;
    
    // Limpa os campos após o envio
    this.reset();
});

const titulonovo = document.getElementById("titulorecado");
const descricaonova = document.getElementById("descricao");
const listaRecadosNovos = document.getElementsByClassName("lista-recados-novos");

let listaRecados = [];

function convertRecadosToLi(recado) {
    return`
    <li class="recado-novo">
                            <h4 class="titulo-recado">${recado.titulo}</h4>
                            <p class="descricao-recado">${recado.descricao}</p>
                            <div class="status">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                    <label class="form-check-label descricao-recado" for="flexRadioDefault1">
                                      Lido
                                    </label>
                                  </div>

                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                    <label class="form-check-label descricao-recado" for="flexRadioDefault2">
                                      Importante
                                    </label>
                                  </div>
                            </div>
                        </li>`
    
}

function criarNovoTitulo(){
        listaRecados.push({
           
            situacao:"Novo"
        });
        listaRecadosNovos += convertRecadosToLi({
            titulo: titulonovo.value,
            descricao: descricaonova.value
        });
        titulonovo.value = "";
        descricao.value = "";
}
console.log(listaRecados);   