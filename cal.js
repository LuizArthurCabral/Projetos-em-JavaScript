
function calcular() {

var valor1 = window.document.getElementById('n1')
var valor2 = window.document.getElementById('n2')
var valor3 = window.document.getElementById('n3')
var res = window.document.getElementById('res')
var N1 = Number(valor1.value)
var N2 = Number(valor2.value)
var N3 = Number(valor3.value)
var M = (N1 + N2 + N3) / 3
if ( 2000 >= M && M >= 1000) {
    	res.innerHTML = 'A sua comissão será de 1%' 
    
} else if (3000 >= M && M >= 2001) {
    res.innerHTML = 'A sua comissão será de 2%'
} else if (5000 >= M && M >= 3001){
    res.innerHTML = 'A sua comissão será de 3%'
} else {
    res.innerHTML = 'A comissão mínima é de 1% e a máxima é de 3%'
}



    
}




