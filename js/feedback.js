var salvar = new Array();

class Feedback{
  constructor(descricao ){
    this.descricao = descricao;
    
  }

  mensagem()
    {
    alert("Feedback Efetuado!"+"\n"+"\n"+this.descricao+"\n");
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
     texto = texto+ '<li onclick="mostrar(' + salvar[i].descricao + ')">' + salvar[i].nome+"</li>";
     }
  } 				
  else{
    texto = "Nenhum feedback até o momento";
  }

  carrega.innerHTML = texto;
}

function mostrar(descricao){
  alert(descricao);
}


/* LIMPAR AS INPUTS E SELECTS PARA PODER DIGITAR DE NUEVO */
function limpar(){
  document.querySelector('#descricao').value= '';
  

}


/* SALVAR OS CADASTROS REALIZADOS*/
document.querySelector('#btnenviar').onclick = function(evt){

  var nome = document.querySelector('#descricao').value;
  var usuario = new Cadastro(descricao);
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
document.querySelector('.feedback').style.display = 'none'

document.querySelector('#add').onclick = function(evt){
  document.querySelector('.feedback').style.display = 'block'
  document.querySelector('.home').style.display = 'none'
}

document.querySelector('#voltar').onclick = function(evt){
  document.querySelector('.feedback').style.display = 'none'
  document.querySelector('.home').style.display = 'block'
}

