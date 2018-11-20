import {Router} from 'restify-router';
import * as restify from 'restify';
const routerInstance = new Router();
import {User} from './users.model';

routerInstance.get('/users', (req, res, next) => {

    User.find()
        .then(users => {
            res.json(users);
            return next();
        })
        .catch(next);
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
        .catch(next);
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
        .catch(next);
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

routerInstance.patch('/users/:id', (req, res, next) => {
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
        .catch(next);
})

routerInstance.del('/users/:id', (req, res, next) => {

    User.remove({_id: req.params.id}).exec()
        .then((cmdResult: any) => {
            if (cmdResult.result.n) {
                res.send(204);
            } else {
                res.send(404);
            }
        })
        .catch(next);
})


// function render(res: restify.Response, next: restify.Next) {
//     return (document) => {
//         if (document) {
//             res.json(document);
//             return next();
//         }
//         res.send(404);
//         return next();
//         }
//     }

export default routerInstance;