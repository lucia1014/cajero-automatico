

const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');
const container = document.querySelector('.container');
const inicio = document.querySelector('#inicioSesion');


let botonPantallaDepositar,
    botonPantallaRetirar,
    botonPantallaCambioPass,
    botonCerrarSesion;

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
            mostrarPantallaUsuario(users[i].nombre, users[i].saldo);
            return;
        }
    }
    alert('Tu usuario/contraseña son incorrectos');
    userInput.value = ''
    passInput.value = ''
}

console.log(usuarioActivo)

const mostrarPantallaUsuario = (userActive, userSaldo) => {
    container.innerHTML = `
        <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h1 id="bienvenido">Bienvenido/a a tu banco ${userActive} </h1>
                <h2 id="saldoUsuario">Tu saldo actual es de ${userSaldo}</h2>
                <h4>¿Qué acción deseas realizar?</h4>
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
    </div>
    `
    botonPantallaDepositar = document.getElementById('btnPantallaDeposito');
    botonPantallaDepositar.addEventListener('click', () => mostrarPantallaDeposito(userSaldo));

    botonPantallaRetirar = document.getElementById('btnPantallaRetiro');
    botonPantallaRetirar.addEventListener('click', () => mostrarPantallaRetiro(userSaldo));

    botonPantallaCambioPass = document.getElementById('btnPantallaCambioPass');
    botonPantallaCambioPass.addEventListener('click', () => mostrarPantallaCambiarPass());

    botonCerrarSesion = document.getElementById('btnPantallaCerrarSesion');
    botonCerrarSesion.addEventListener('click',);
}

const mostrarPantallaDeposito = userSaldo => {
    container.innerHTML = `
    <div class="container">
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
</div>
`
    const btnRegresar = document.querySelector('#btnRegresar');
    btnRegresar.addEventListener('click', mostrarPantallaUsuario);
}

const depositar = () => {

}

const mostrarPantallaRetiro = userSaldo => {
    container.innerHTML = `
    <div class="container">
    <div class="row text-center">
        <div class="col-12">
            <h1 id="saldoUsuario">Tu saldo actual es de $$${userSaldo}</h1>
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
</div>
`
    const btnRegresar = document.querySelector('#btnRegresar');
    btnRegresar.addEventListener('click', mostrarPantallaUsuario);
}

const mostrarPantallaCambiarPass = () => {
    container.innerHTML = `
    <div class="container">
        <div class="row text-center">
            <div class="col-12">
                <h1>¿Deseas cambiar tu Contraseña?</h1>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12">
                <label for="actualPass" class="actualPass">Ingresa tu contraseña actual:</label>
                <input type="password" class="form-label" id="passInput" placeholder="Contraseña...">            </div>
        </div>
        <div class="row text-center">
            <div class="col-12">
                <label for="newPass" class="newPass">Ingresa tu nueva contraseña:</label>
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
    </div>
`
    const btnRegresar = document.querySelector('#btnRegresar');
    btnRegresar.addEventListener('click', mostrarPantallaUsuario);
}

btnEnviar.addEventListener('click', validarUsuario)


