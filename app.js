

const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');


const validarUsuario = () => {

    for (let i = 0; i < users.length; i++) {
        if (userInput.value === users[i].nombre){
            console.log(`Nombre: ${users[i].nombre} Saldo: ${users[i].saldo}`)
            userInput.value = ''
            passInput.value = ''
            return;
        }
    }

    alert('Tu Usuario/Contraseña es incorrecto')
}


btnEnviar.addEventListener('click', validarUsuario)
