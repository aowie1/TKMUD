<?php

include_once "vendor/autoload.php";

use Ratchet\Server\IoServer;
use TkMud\Chat;

$server = IoServer::factory(
    new Chat(),
    8080
);

$server->run();