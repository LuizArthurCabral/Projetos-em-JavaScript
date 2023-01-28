function InformaçõesVD() {
    var id1 = window.document.getElementById('VND')
    var res = window.document.getElementById('In1')
    var in1 = String(id1.value)
    
    if (in1 === "VENDAS") { 
        res.innerHTML = "<p>Orçamento para venda -> VENDA -> DAV-ORÇ-> dados -> concluir <br>Pesquisar-> tipo -> DAV-ORÇ-dados-> PESQUISAR </br> <br> Obs 2: (Conversão para pré venda) -> PESQUISAR -> dados -> (DAV-ORÇ-Pré venda)</br> </p>"
       
       

    }else {

        res.innerHTML = 'ERRO'



    }
    }
function InformaçõesOS() {
    var id2 =  window.document.getElementById('ODM')
    var res2 = window.document.getElementById('In2')
    var in2 =  String(id2.value)
    if (in2 === "ORDEM") {
        res2.innerHTML = "<p> CANCELAR ORDEM DE SERVIÇO -> OPÇÕES: BUSCAR(101),O.S e MOVIMENTAÇÕES -> IDENTIFICAR A ORDEM DE SERVIÇO -> PESQUISAR -> O.S -> CANCELAR <br>PROCESSO REQUISIÇÃO -> ORDEM DE SERVIÇO -> IDENTIFICAR -> LANÇAMENTOS -> DADOS DE PRODUTO -> SELECIONAR-> GERAR A REQUISIÇÃO  </br> brRECEBIMENTO PARCIAL NA ORDEM DE SERVIÇO -> NUMÉRICO: 101 -> PESQUISAR -> SELECIONAR-> LANÇAMENTOS-> PRINCIPAL-> RECEBIMENTO-> VALOR-> CONCLUIR </br> <br> Obs: FINANCEIRO -> CAIXA -SELECIONAR->INFOME FORMA E VALOR QUE SERÁ PAGO-> Concluir</br> </p>"
        
       
    
    } else  {
        res2.innerHTML = 'ERRO'



}
}
function InformaçõesBL() {
    var id3 =  window.document.getElementById('BL')
    var res3 = window.document.getElementById('In3')
    var in3 = String(id3.value)
    if (in3 === "BOLETO") {
        res3.innerHTML = "<p>Obs: FINANCEIRO -> CAIXA -SELECIONAR->INFOME FORMA E VALOR QUE SERÁ PAGO-> Concluir <br> FINANCEIRO -> EMITIR BOLETO GRÁFICO ->IMPRESSÃO E REMESSA BANCÁRIA -> DADOS -> PESQUISAR -> SELECIONAR -> CONFIRMAR PORTADOR E INFORMAÇÕES DE TAXAS ->  IMPRIMIR </br> EMITIR REMESSA -> PENDENTE DE REMESSA -> DADOS -> SELECIONAR BOLETOS -> REMESSA -> SALVAR </p>"
    }else {
        res3.innerHTML = "ERRO"
    }
} 

