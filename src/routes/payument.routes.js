import {Router} from "express";
import {createSession} from '../controllers/payment.controller';

const router = Router();

router.get('/create-checkout-session',createSession);
router.get('/success', (requ, res) => res.send('success'));
router.get('/cancel', (requ, res) => res.send('cancel'));

export default router;