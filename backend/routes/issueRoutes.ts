import { Router } from 'express';
import IssuesController from '../controller/issuesController';



const router = Router();
const issuesController = new IssuesController();

router.post('/', issuesController.createIssue);
router.get('/', issuesController.getAllIssues);
router.get('/:id', issuesController.getIssue);
router.put('/:id', issuesController.editIssue);
router.delete('/:id', issuesController.deleteIssue);

export default router;