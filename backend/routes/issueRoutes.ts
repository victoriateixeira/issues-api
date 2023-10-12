import { Router } from 'express';
import IssuesController from '../controller/issuesController';



const router = Router();
const issuesController = new IssuesController();

router.post('/', issuesController.createIssue);
router.get('/', issuesController.getIssue);
router.put('/', issuesController.editIssue);
router.delete('/', issuesController.deleteIssue);

export default router;