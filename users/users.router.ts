import {Router} from 'restify-router';
const routerInstance = new Router();
import {User} from './users.model';

routerInstance.get('/users', (req, res, next) => {

    User.findAll()
        .then(users => {
            res.json(users);
            return next();
        })
});

export default routerInstance;