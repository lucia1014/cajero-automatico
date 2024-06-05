

const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');

const validarUsuario = (e) => {
    e.preventDefault()
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].nombre)
        console.log(users[i].password)
        if (userInput.value === users[i].nombre && passInput.value == users[i].password) {
            console.log('validacion correcta')
            userInput.value = ''
            passInput.value = ''
            return;
        }
    }
    console.log(userInput.value)
    console.log(passInput.value)
    console.log('Tu usuario/contraseña son incorrectos')
    alert('Tu usuario/contraseña son incorrectos');
    userInput.value = ''
    passInput.value = ''
}

const mostrarPantallaUsuario = () => {
    for (let i = 0; i < users.length; i++) {

        if (validarUsuario === true) {
            container.innerHTML =
                `<div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h1 id="bienvenido">Bienvenido/a a tu banco ${users[i].nombre} </h1>
                <h2>¿Qué acción deseas realizar?</h2>
                <h3 id="saldoUsuario">Tu saldo actual es de ${users[i].saldo}</h3>
            </div>
        </div>
        <div class="row text-center">
            <div class="row">
                <div class="col-6">
                    <button type='button' class="" id="btnDeposito">Depositar</button>
                </div>
                <div class="col-6">
                    <button type='button' class="" id="btnCambioPass">Cambiar contraseña</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type='button' class="" id="btnRetiro">Retirar</button>
                </div>
                <div class="col-6">
                    <button type='button' class="" id="btnCerrarSesion">Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>`
            return
        }

    }

}

const mostrarPantallaDeposito = () => {
    container.innerHTML = 'aquí va html de cuando el usuario se loggee'
}

const mostrarPantallaRetiro = () => {
    container.innerHTML = 'aquí va html de cuando el usuario se loggee'
}


btnEnviar.addEventListener('click', validarUsuario)



