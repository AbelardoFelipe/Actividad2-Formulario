let bienvenida1 = document.getElementById('bienvenida1')
let bienvenida2 = document.getElementById('bienvenida2')
let cerrar = document.getElementById('cerrar')

window.comunicacion.bienvenida( (event, args) => {
    bienvenida1.innerHTML = 'BIENVENIDO'
    bienvenida2.innerHTML = args
})

// BOTON CERRAR
cerrar.addEventListener('click', () => {
    window.comunicacion.VentanaCerrar('results')
})