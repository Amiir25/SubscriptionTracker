import aj from '../config/arkjet.js';

const arkjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) return res.status(429).json({error: 'Rate Limit exceeded'});
            // if (decision.reason.isBot()) return res.status(403).json({error: 'Bot deleted'});

            // return res.status(403).json({ error: 'Access denied' });
        }

        next();
    } catch (error) {
        console.log(`Arkjet Middleware Error: ${error}`);
        next(error);
    }
}

export default arkjetMiddleware;