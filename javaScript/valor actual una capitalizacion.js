var formulario = document.forms.formulario_valor_actual
var resultado = document.getElementById("res-v.A_una_capitalizacion")

formulario.tiempo.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV


function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let r = parseFloat(formulario.renta.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = r*(((1-(1+i)**-n)))/i
    resultado.innerHTML = total.toFixed(2)
}
