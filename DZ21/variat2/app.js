const URL = 'wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'

const chat = document.querySelector('#chat')
const nameAuthor = document.querySelector('#name')
const message = document.querySelector('#message')
const button = document.querySelector("#send");

button.addEventListener('click', () => {
    send()
})
const socket = new WebSocket(URL);

socket.onopen = () => {
    console.log('socket connected')

}

socket.onclose = () => {
    console.log('socket closed')
}

socket.onerror = () => {
    console.log('socket error')
}

socket.onmessage = ({ data }) => {
    data = JSON.parse(data);
    console.log('get data', data)

    const elem = document.createElement('div')
    elem.innerHTML = `${data.payload.author}: ${data.payload.message}:`
    chat.append(elem)
}


function send() {
    const package = {
        type: 'message',
        payload:
        {
            author: nameAuthor.value,
            message: message.value
        }
    }

    console.log(package);
    const data = JSON.stringify(package)
    console.log('send data', data);

    socket.send(data)
    reset();
}

function reset() {
    nameAuthor.value = '',
    message.value = ''
}



