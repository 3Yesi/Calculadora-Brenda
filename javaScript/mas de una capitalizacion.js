var formulario = document.forms.formulario_capitalizacion
var resultado = document.getElementById("res_capitalizacion")

formulario.tiempo.oninput = calcularAV
formulario.renta.oninput = calcularAV
formulario.interes.oninput = calcularAV
formulario.capitalizacion.oninput = calcularAV


function calcularAV() {
    let n = parseFloat(formulario.tiempo.value)
    let r = parseFloat(formulario.renta.value)
    let m = parseFloat(formulario.capitalizacion.value)
    let i = parseFloat((formulario.interes.value)/100)

    let total = (((1+(i/m))**m)*(((1+(i/m))**(m*n)-1)/(i/m))*(i/m)/(((1+(i/m))**m)-1))*r
    resultado.innerHTML = total.toFixed(2)
}
