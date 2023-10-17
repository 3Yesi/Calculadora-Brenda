var formulario = document.forms.formulario_adelantadas
var resultado = document.getElementById("res-anualidades-adelantadas")

formulario.tiempo.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = (r*(1+i)*((1+i)**n-1)/i)

    resultado.innerHTML = total.toFixed(2) 
}
 