"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.default])
    .then(server => {
    console.log('Server is listening on:', server.application.address());
})
    .catch(error => {
    console.log('Serve failed to start');
    console.log(error);
    process.exit(1);
});
