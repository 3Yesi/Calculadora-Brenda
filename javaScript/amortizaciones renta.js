var formulario = document.forms.formulario_amortizaciones_renta
var resultado = document.getElementById("res-amortizaciones_renta")

formulario.tiempo.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let v = parseFloat(formulario.monto.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = (i*((1+i)**n)/(((1+i)**n)-1))*v
    resultado.innerHTML = total.toFixed(2)
}
