let registro = document.getElementById('formularioRegistro')
let nombres = document.getElementById('INombres')
let apellidos = document.getElementById('IApellidos')
let usuario = document.getElementById('IUsuario')
let email = document.getElementById('IEmail')
let pass = document.getElementById('IContrasenia')
let fechaNacimiento = document.getElementById('IFecha')
let err = document.getElementById('error')
let noDisponible = document.getElementById('noDisponible')
let errorCorreo = document.getElementById('errorCorreo')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")

// ESCUCHAR SI SE SELECCIONÓ UNA FECHA
window.addEventListener('load', ()=>{
    fechaNacimiento.addEventListener('change', ()=>{
        if(fechaNacimiento.value){
            if(calcularEdad(fechaNacimiento.value) < 18){
                err.innerHTML = 'No se puede registrar porque es menor de edad'
            }
        }
    })
})

// FUNCION PARA CALCULAR LA EDAD SEGUN LA FECHA QUE SE INGRESO EN EL INPUT TIPO FECHA
const calcularEdad = (fechaNacimiento) =>{
    const fechaActual = new Date()
    const anioActual = parseInt(fechaActual.getFullYear())
    const mesActual = parseInt(fechaActual.getMonth()) + 1
    const diaActual = parseInt(fechaActual.getDate())

    const anioNacimiento = parseInt(String(fechaNacimiento).substring(0,4))
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5,7))
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8,10))

    let edad = anioActual - anioNacimiento
    if(mesActual < mesNacimiento){
        edad--
    }else if(mesActual === mesNacimiento){
        if(diaActual < diaNacimiento){
            edad--
        }
    }
return edad
}

// BOTON DE REGISTRO
registro.addEventListener('submit', (evento) => {
    evento.preventDefault()
    var error = ""

    // VALIDAR LA CONTRASEÑA
    if (!pass.value.match(expMay)) {
        error += "Debe tener al menos una mayuscula"
    } if (!pass.value.match(expMin)) {
        error += "Debe tener al menos una minuscula"
    } if (!pass.value.match(expNum)) {
        error += "Debe tener al menos un número"
    } if (error == "") {
        if(calcularEdad(fechaNacimiento.value) > 18){
            window.comunicacion.VentanaBienvenida([usuario.value]);
        }
    } else {
        alert(error)
    }
})

// MOSTRAR MENSAJE SI EL USUARIO NO ESTA DISPONIBLE
window.comunicacion.mensaje( (event, args) => {
    noDisponible.innerHTML = args
})