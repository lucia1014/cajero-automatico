

const userInput = document.querySelector('#userInput');
const passInput = document.querySelector('#passInput');
const btnEnviar = document.querySelector('#btnEnviar');


const validarUsuario = () => {

    for (let i = 0; i < users.length; i++) {
        if (userInput.value === users[i].nombre && passInput.value === users[i].password) {
                location = "principal.html"
            } else {
                alert('Tu Usuario/Contraseña es incorrecto')
            }
        }


    }

btnEnviar.addEventListener('click', validarUsuario)


