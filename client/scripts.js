var socket = new WebSocket('url'),
    message;

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

message = new Message();
message.setCommand('LOGIN');
message.setUser('someone');

socket.send(message);
