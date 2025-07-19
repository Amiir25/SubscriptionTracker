import { Router } from 'express';

const subsRouter = Router();

subsRouter.get('/', (req, res) => {
    res.send({title: 'GET all subscription'});
})

subsRouter.get('/:id', (req, res) => {
    res.send({title: 'GET subscription details'});
})

subsRouter.post('/', (req, res) => {
    res.send({title: 'CREATE subscription'});
})

subsRouter.put('/:id', (req, res) => {
    res.send({title: 'UPDATE subscription'});
})

subsRouter.delete('/:id', (req, res) => {
    res.send({title: 'DELETE subscription'});
})

subsRouter.get('/user/:id', (req, res) => {
    res.send({title: 'GET all user subscription'});
})

subsRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'CANCEL subscription'});
})

subsRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'GET upcoming renewals'});
})

export default subsRouter;