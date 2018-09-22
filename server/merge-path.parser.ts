import * as restify from 'restify';

const mpContentType = 'application/merge-path+json';

export const mergePathBodyParser = (req: restify.Request, resp: restify.Response, next: restify.Next) => {
    if (req.getContentType() === mpContentType && req.method === 'PATH') {
        try {
            req.body = JSON.parse(req.body);
        } catch (e) {
            return next(new Error(`Ìnvalid content: &{e.message}`));
        }
    }
    return next();
}
