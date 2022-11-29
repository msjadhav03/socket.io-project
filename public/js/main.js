const socket = io('/');

import store from './store.js'
import ui from './ui.js'

socket.on("connect", () => {
    console.log('Successfully conneected ' + socket.id)
});

socket.on('hello-client', () => {
    console.log('hello client')

    socket.emit('hello-server')
})


const nameInput = document.querySelector('.introduction_page_name_input');
nameInput.addEventListener('keyup', (event) => {
    console.log(event.target.value)
    store.setUsername(event.target.value)
});

const chatPageButton = document.getElementById('enter_chats_button');
chatPageButton.addEventListener("click", () => {
    ui.goToChatPage()
})
