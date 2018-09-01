import {Server} from './server/server';
import userRouter from './users/users.router';

const server = new Server();
server.bootstrap([userRouter])
    .then(server => {
        console.log('Server is listening on:', server.application.address())
    })
    .catch(error => {
        console.log('Serve failed to start')
        console.log(error)
        process.exit(1)
    });


