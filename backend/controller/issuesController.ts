import { Request, Response } from 'express';
import IssuesService from '../service/issues.service';

class IssuesController {
  constructor(private issuesService = new IssuesService()) {}

  public getAllIssues = async (_req: Request, res: Response) => {
    const issues = await this.issuesService.getAllIssues();
    return res.status(200).json(issues);
  };
  public getIssue = async (req: Request, res: Response) => {
    const issueId = Number(req.params.id)
    const issue = await this.issuesService.getIssue(issueId);
    return res.status(200).json(issue);
  };

  public createIssue = async (req: Request, res: Response) => {
    const issue = req.body;
    const newIssue = await this.issuesService.createIssue(issue);
    return res.status(200).json(newIssue);
  };

  public editIssue = async (req: Request, res: Response) => {
    const issueId = Number(req.params.id)
    const {description} = req.body
    await this.issuesService.editIssueDescription(issueId, description);
    return res.status(200).json();
  };

  public deleteIssue = async (req: Request, res: Response) => {
    const issueId = Number(req.params.id)
    await this.issuesService.deleteIssue(issueId);
    return res.status(200).json();
  };
}

export default IssuesController;