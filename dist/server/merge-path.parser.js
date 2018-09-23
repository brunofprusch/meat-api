"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpContentType = 'application/merge-path+json';
exports.mergePathBodyParser = (req, resp, next) => {
    if (req.getContentType() === mpContentType && req.method === 'PATH') {
        try {
            req.body = JSON.parse(req.body);
        }
        catch (e) {
            return next(new Error(`Ìnvalid content: &{e.message}`));
        }
    }
    return next();
};
//# sourceMappingURL=merge-path.parser.js.map