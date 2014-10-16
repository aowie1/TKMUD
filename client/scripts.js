var socket,
    message;

try {
    socket = new WebSocket('url');
} catch (e) {
    console.error(e.message);
    socket = {
        onopen: function () {},
        onmessage: function () {},
        send: function (message) {
            console.log(message);
        }
    };
}

socket.onopen(function (event) {
    console.log('socket open');
});

socket.onmessage(function (event) {
    console.log('message', event.data);
});

function Message () {
    this.command = null;
    this.user = null;
    return this;
};

Message.prototype.setCommand = function (command) {
    this.command = command;
    return this;
};

Message.prototype.setUser = function (user) {
    this.user = user;
    return this;
};

document.querySelector('.login').onclick = function (e) {
    var username;

    e.preventDefault();

    username = document.querySelector('#username').value;

    message = new Message();
    message.setCommand('LOGIN');
    message.setUser(username);

    socket.send(message);
}
