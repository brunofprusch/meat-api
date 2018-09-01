import {Router} from 'restify-router';
const routerInstance = new Router();
import {User} from './users.model';

routerInstance.get('/users', (req, res, next) => {

    User.find()
        .then(users => {
            res.json(users);
            return next();
        })
});

routerInstance.get('users/:id', (req, res, next) => {
    
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                res.json(user);
                return next();
            }
            res.send(404);
            return next();
        })
})

export default routerInstance;