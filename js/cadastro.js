var salvar = new Array();

class Cadastro{
  constructor(nome, email, telefone ){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    
  }

  mensagem()
    {
    alert("Cadastro Efetuado!"+"\n"+"\n"+this.nome+"\n"+this.email+"\n"+this.telefone+"\n");
    }

}


/* LISTAGEM DOS CADASTROS NA .HOME*/
function carregar(){
  var carrega = document.getElementById('load');
  var tamanho = salvar.length;
  var texto = "";
  if(tamanho !=0){
    texto="";
    for(i=0;i<tamanho;i++)
    {
     texto = texto+ '<li onclick="mostrar(' + salvar[i].cpf + ')">' + salvar[i].nome+"</li>";
     }
  } 				
  else{
    texto = "Nenhum cadastro até o momento";
  }

  carrega.innerHTML = texto;
}

function mostrar(nome){
  alert(nome);
}


/* LIMPAR AS INPUTS E SELECTS PARA PODER DIGITAR DE NUEVO */
function limpar(){
  document.querySelector('#nome').value= '';
  document.querySelector('#email').value= '';
  document.querySelector('#telefone').value= '';
}


/* SALVAR OS CADASTROS REALIZADOS*/
document.querySelector('#btnsalvar').onclick = function(evt){

  var nome = document.querySelector('#nome').value;
  var email = document.querySelector('#email').value;
  var telefone = document.querySelector('#telefone').value;
  
  var usuario = new Cadastro(nome,email,telefone);
  salvar.push(usuario);
  usuario.mensagem();
  carregar();	

  limpar();

}


/* INFORMAÇÕES DO ICONE INFO */
document.querySelector('#info').onclick = function(evt){
  alert("Sistema desenvolvido pelos estudantes do Instituto Federal de Mato Grosso do Sul para as disciplinas de Linguagem de Apresentação e Estruturação de Conteúdos 2 e Programação Orientada a Objetos 2" + "\n" + "\n" + "By:" + "\n" + "William Medeiros" + "\n" + "Liliane Dauzacker");
}


/* FAZER A .HOME E A .CADASTRO SUMIR E APARECER*/
document.querySelector('.cadastro').style.display = 'none'

document.querySelector('#add').onclick = function(evt){
  document.querySelector('.cadastro').style.display = 'block'
  document.querySelector('.home').style.display = 'none'
}

document.querySelector('#voltar').onclick = function(evt){
  document.querySelector('.cadastro').style.display = 'none'
  document.querySelector('.home').style.display = 'block'
}

