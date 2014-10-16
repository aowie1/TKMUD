var socket = new WebSocket('url');

socket.onopen(function (event) {
    console.log('socket open');
});

socket.onmessage(function (event) {
    console.log('message', event.data);
});

socket.send('yo');
