var formulario = document.forms.formulario_rentas
var resultado = document.getElementById("res-renta")

formulario.tiempo.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let s = parseFloat(formulario.monto.value)
    let i = parseFloat((formulario.interes.value)/100)
   

    let total = (i/(((1+i)**n)-1))*(1/(1+i))*s

    resultado.innerHTML = total.toFixed(2)
}
