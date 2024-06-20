

const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');
const container = document.querySelector('.container');


let botonPantallaDepositar,
    botonPantallaRetirar,
    botonCerrarSesion,
    botonDepositar,
    botonRetirar;

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
            
            const localUser = localStorage.getItem(users[i].nombre)
            if (localUser) {
                const userParse = JSON.parse(localUser)
                console.log(userParse)

                usuarioActivo.user = userParse.usuarioActivo.user;
                usuarioActivo.saldo = userParse.usuarioActivo.saldo;
                mostrarPantallaUsuario();
                return;

            }

            localStorage.setItem(users[i].nombre, JSON.stringify(users[i]));
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

const mostrarPantallaUsuario = () => {
    container.innerHTML = `
    <div class="container bg-white rounded-end-lg rounded-start-lg py-5 mt-5">
        <div class="row text-center">
            <div class="col-12 text-black" id="bienvenido">
                <h1>Bienvenido/a a tu banco ${usuarioActivo.user} </h1>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 text-black">
                <p id="saldoUsuario" class="fs-3">Tu saldo actual es de $${usuarioActivo.saldo}</p>
                <p class="fst-italic">¿Qué acción deseas realizar?</p>
            </div>
        </div>
        <div class="row text-center">
            <div class="row mt-4">
                <div class="col-12 col-md-6">
                    <button type='button' class="btn btn-primary btn-lg" id="btnPantallaDeposito">Depositar</button>
                </div>
                <div class="col-12 col-md-6">
                    <button type='button' class="btn btn-primary btn-lg" id="btnPantallaRetiro">Retirar</button>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12">
                    <button type='button' class="btn btn-danger" id="btnPantallaLogOut">Cerrar sesión</button>
                </div>
            </div>
        </div>
    </div>
    `
    botonPantallaDepositar = document.getElementById('btnPantallaDeposito');
    botonPantallaDepositar.addEventListener('click', () => mostrarPantallaDeposito(usuarioActivo.saldo));

    botonPantallaRetirar = document.getElementById('btnPantallaRetiro');
    botonPantallaRetirar.addEventListener('click', () => mostrarPantallaRetiro(usuarioActivo.saldo));

    botonCerrarSesion = document.querySelector('#btnPantallaLogOut')
    botonCerrarSesion.addEventListener('click', logOut);
    
}

const mostrarPantallaDeposito = () => {
    container.innerHTML = `
    <div class="container bg-white rounded-end-lg rounded-start-lg py-5 mt-5">
        <div class="row text-center text-black">
            <div class="col-12 col-md-6">
                <div class="col-12 bg-info rounded-end-lg rounded-start-lg">
                    <h2>Deposito</h2>
                    <p> 
                        $ <spam id="deposito">0</spam>
                    </p>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="col-12 bg-success rounded-end-lg rounded-start-lg">
                    <h2>Balance</h2>
                    <p> 
                        $ <spam id="balance">${usuarioActivo.saldo}</spam>
                    </p>
                </div>
            </div>
        </div>
        <div class="row text-center text-black operaciones">
            <div class="col-6 bg-light mx-3" style="width: 300px;">
                <div class="col-12 mt-2">
                    <label for="deposito" class="depositar">Cantidad a depositar:</label>
                </div>
                <div class="col-12 ingresoValor">
                    <input type="number" id="cantidadDeposito" class="form-control mt-3" style="width: 200px;" placeholder="$0">
                </div>
                <div class="col-12 btnOperacion">
                    <button type="button" class="btn btn-funcion w-200px my-4" id="btnDeposito">Depositar</button>
                </div>
            </div>
            <div class="col-6 py-5 mt-3">
                <button type='button' class="btn btn-danger" id="btnRegresar">Regresar</button>
            </div>
        </div>
    </div>
    `
    botonDepositar = document.getElementById('btnDeposito');
    botonDepositar.addEventListener('click', depositar);

    const btnRegresar = document.querySelector('#btnRegresar');
    btnRegresar.addEventListener('click', mostrarPantallaUsuario);
}

const depositar = () => {

    const deposit = document.querySelector('#deposito');
    const balance = document.querySelector('#balance');
    const depositoInput = document.querySelector('#cantidadDeposito');
    const value = depositoInput.value;
    const newBalance = Number(balance.innerText) + Number(value);

    if (newBalance > 990) {
        alert('Tu monto excede el máximo de saldo permitido.')
        return
    } else {
        deposit.innerText = value;
        balance.innerText = newBalance;

        usuarioActivo.saldo = newBalance;
        localStorage.setItem(usuarioActivo.user, JSON.stringify({ usuarioActivo }));
    }
    depositoInput.value = '';

}


const mostrarPantallaRetiro = () => {
    container.innerHTML = `
    <div class="container bg-white rounded-end-lg rounded-start-lg py-5 mt-5">
        <div class="row text-center text-black">
            <div class="col-12 col-md-6">
                <div class="col-12 bg-info rounded-end-lg rounded-start-lg">
                    <h2>Retiro</h2>
                    <p> 
                        $<spam id="retiro">0</spam>
                    </p>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="col-12 bg-success rounded-end-lg rounded-start-lg">
                    <h2>Balance</h2>
                    <p> 
                        $<spam id="balance">${usuarioActivo.saldo}</spam>
                    </p>
                </div>
            </div>
        </div>
        <div class="row text-center text-black operaciones">
            <div class="col-6 bg-light mx-3" style="width: 300px;">
                <div class="col-12 mt-2">
                    <label for="retiro" class="retirar">Cantidad a retirar:</label>
                </div>
                <div class="col-12 ingresoValor">
                    <input type="number" id="cantidadRetiro" class="form-control mt-3" style="width: 200px;" placeholder="$0">
                </div>
                <div class="col-12 btnOperacion">
                    <button type="button" class="btn btn-funcion w-200px my-4" id="btnRetiro">Retirar</button>
                </div>
            </div>
            <div class="col-6 py-5 mt-3">
                <button type='button' class="btn btn-danger" id="btnRegresar">Regresar</button>
            </div>
        </div>
    </div>
    `
    botonRetirar = document.getElementById('btnRetiro');
    botonRetirar.addEventListener('click', retirar);

    const btnRegresar = document.querySelector('#btnRegresar');
    btnRegresar.addEventListener('click', mostrarPantallaUsuario);
}

const retirar = () => {

    const retiro = document.querySelector('#retiro');
    const balance = document.querySelector('#balance');
    const retiroInput = document.querySelector('#cantidadRetiro');
    const value = retiroInput.value;
    const newBalance = Number(balance.innerText) - Number(value);

    if (newBalance < 10) {
        alert('Tu monto excede el minimo de saldo permitido.')
        return
    } else {
        retiro.innerText = value;
        balance.innerText = newBalance;

        usuarioActivo.saldo = newBalance;
        localStorage.setItem(usuarioActivo.user, JSON.stringify({ usuarioActivo }));

    }
    retiroInput.value = '';
}



const logOut = () => {
    window.location.replace("index.html")
}



btnEnviar.addEventListener('click', validarUsuario)


