import {Router} from 'express';
import linksController from '../controllers/links';

const router = Router();

router.post('/link', linksController.postLink );

router.get('/links/:codes', linksController.hitLink );

router.get('/links/codes/stats', linksController.getLink );

export default router;