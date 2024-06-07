

const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');
const formInicioSesion = document.querySelector('.container');
const btnPantallaDepositar = document.querySelector('#btnPantallaDeposito');

let usuarioActivo = {
    user: '',
    saldo: ''
}

const validarUsuario = (e) => {
    e.preventDefault()
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].nombre)
        console.log(users[i].password)
        if (userInput.value === users[i].nombre && passInput.value == users[i].password) {
            console.log('validacion correcta')
            userInput.value = ''
            passInput.value = ''
            usuarioActivo.user = users[i].nombre;
            usuarioActivo.saldo = users[i].saldo;
            formInicioSesion.innerHTML = mostrarPantallaUsuario(users[i].nombre, users[i].saldo)
            return;
        }
    }
    alert('Tu usuario/contraseña son incorrectos');
    userInput.value = ''
    passInput.value = ''
}

console.log(usuarioActivo)

const mostrarPantallaUsuario = (userActive, userSaldo) => {

    return (
        `<div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h1 id="bienvenido">Bienvenido/a a tu banco ${userActive} </h1>
                <h2>¿Qué acción deseas realizar?</h2>
                <h3 id="saldoUsuario">Tu saldo actual es de ${userSaldo}</h3>
            </div>
        </div>
        <div class="row text-center">
            <div class="row">
                <div class="col-6">
                    <button type='button' class="" id="btnPantallaDeposito">Depositar</button>
                </div>
                <div class="col-6">
                    <button type='button' class="" id="btnPantallaCambioPass">Cambiar contraseña</button>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <button type='button' class="" id="btnPantallaRetiro">Retirar</button>
                </div>
                <div class="col-6">
                    <button type='button' class="" id="btnPantallaCerrarSesion">Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>`
    )

}


const mostrarPantallaDeposito = userSaldo => {
    formInicioSesion.innerHTML = mostrarPantallaDeposito(users[i].nombre, users[i].saldo)
    return (
        `<div class="container">
    <div class="row text-center">
        <div class="col-12">
            <h1 id="saldoUsuario">Tu saldo actual es de $${userSaldo}</h1>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-12">
            <label for="deposito" class="depositar">Cantidad a depositar:</label>
            <input type="number" class="depositar" id="cantidadDeposito" placeholder="$0">
        </div>
    </div>
    <div class="row text-center">
        <div class="col-6">
            <button type="button" class="" id="btnDeposito">Depositar</button>
        </div>
        <div class="col-6">
            <button type="button" class="" id="btnRegresar">Regresar</button>
        </div>
    </div>
</div>`
    )
}

const mostrarPantallaRetiro = () => {
    formInicioSesion.innerHTML = `<div class="container">
    <div class="row text-center">
        <div class="col-12">
            <h1 id="saldoUsuario">Tu saldo actual es de $</h1>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-12">
            <label for="retiro" class="retirar">Cantidad a retirar:</label>
            <input type="number" class="retirar" id="cantidaRetiro" placeholder="$0">
        </div>
    </div>
    <div class="row text-center">
        <div class="col-6">
            <button type="button" class="" id="btnRetiro">Retirar</button>
        </div>
        <div class="col-6">
            <button type="button" class="" id="btnRegresar">Regresar</button>
        </div>
    </div>
</div>`
} */

/* const mostrarPantallaCambiarPass = () => {
    formInicioSesion.innerHTML = `<div class="container">
    <div class="row text-center">
        <div class="col-12">
            <h1 id="saldoUsuario">¿Deseas cambiar tu Contraseña?</h1>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-12">
            <label for="retiro" class="cambioPass">Ingresa tu contraseña actual:</label>
            <input type="password" class="form-label" id="passInput" placeholder="Contraseña...">            </div>
    </div>
    <div class="row text-center">
        <div class="col-12">
            <label for="retiro" class="retirar">Ingresa tu nueva contraseña:</label>
            <input type="password" class="form-label" id="newPassInput" placeholder="Contraseña...">            </div>
        </div>
    </div>
    <div class="row text-center">
        <div class="col-6">
            <button type="button" class="" id="btnNewPass">Guardar</button>
        </div>
        <div class="col-6">
            <button type="button" class="" id="btnRegresar">Regresar</button>
        </div>
    </div>
</div>`
} */

btnEnviar.addEventListener('click', validarUsuario)
btnPantallaDepositar.addEventListener('click', mostrarPantallaDeposito)



