var formulario = document.forms.formulario_amortizaciones
var resultado = document.getElementById("res-amortizaciones")

formulario.tiempo.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = ((((1+i)**n)-1)/(i*((1+i)**n)))*r
    resultado.innerHTML = total.toFixed(2)
}
