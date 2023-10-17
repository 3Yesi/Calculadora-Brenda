var formulario = document.forms.formulario_valor_actual
var resultado = document.getElementById("res-anualidades-tiempo")

formulario.tiempo.oninput = calcularAV
formulario.monto.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizacion.oninput = calcularAV

function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let r = parseFloat(formulario.monto.value)
    let j = parseFloat((formulario.interes.value)/100)
    let m = parseFloat(formulario.capitalizacion.value)

    let total =  ((((1+(j/m))**(m*n))-1)/(((1+(j/m))**m)-1))*r

    resultado.innerHTML = total.toFixed(2)
}
