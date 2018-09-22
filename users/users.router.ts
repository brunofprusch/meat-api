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

routerInstance.get('/users/:id', (req, res, next) => {
    
    User.findById(req.params.id)
        .then(user => {
            if (user) {
                res.json(user);
                return next();
            }
            res.send(404);
            return next();
        })
});

routerInstance.post('/users', (req, res, next) => {
    let user = new User(req.body);
    user.save()
        .then(user => {
            User.findById(user._id)
                .then(user => {
                    res.json(user)
                    return next();
                })
        })
});

routerInstance.put('/users/:id', (req, res, next) => {

    User.findById(req.params.id)
        .then(userFound => {
            let user = new User(req.body);
            user._id = req.params.id;
            user.update(user)
                .then(userUpdated => {
                    res.json(user)
                    return next();
                });
        })
        .catch(error => {
            res.send(404);
            return next();
        })
});

routerInstance.path('/users/:id', (req, res, next) => {
    const options = {new: true}
    User.findByIdAndUpdate(req.params.id, req.body, options)
        .then(user => {
            if (user) {
                res.json(user)
                return next();
            }

            res.send(404);
            return next();
        })
})

export default routerInstance;