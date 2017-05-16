$("#submit").click(function() {
  var nome = $("#nome").val();
  var idade = parseFloat($("#idade").val());
  var altura = parseFloat($("#altura").val());
  var peso = parseFloat($("#peso").val());
  var atividade = $("#atividade").val();
  var ki;

  if(nome == "" || isNaN(idade) ||
  isNaN(altura) || isNaN(peso) || atividade == ""){
    alert("Preencha todos os campos!");
    return false;
  }

  ki = (idade * ( altura + peso));
  if(atividade == "diariamente"){
    ki *= 0.2;
  }else if (atividade == "semanalmente") {
    ki *= 0.12;
  }else if (atividade == "pouco"){
    ki *= 0.08;
  }else{
    ki *= 0.05;
  }

  if(peso > 90 && altura < 170){
    ki *= 0.1;
  }

  ki = Math.round(ki);

  insereLinha(nome, ki);
});

function insereLinha(nome, ki){
  var raiva = 8;
  var tabela = $("#tabela");
  var nomeTabela = '<td>' + nome + '</td>';
  var kiNormalTabela = '<td>' + ki + '</td>';
  var kiRaivaTabela = '<td>' + ki*raiva + '</td>';
  var linha = '<tr>' + nomeTabela + kiNormalTabela + kiRaivaTabela + '</tr>';
  $('#tabela tbody').append(linha);
}
