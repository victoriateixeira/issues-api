import connection from '../model/connection';
import IssuesModel from '../model/issuesModel';
import { IIssue } from '../interfaces';


class IssuesService {
  public model: IssuesModel;

  constructor() {
    this.model = new IssuesModel(connection);
  }
  
  public async getIssue(issueId: number):Promise<IIssue> {
    const issue = this.model.getIssue(issueId);
    return issue;
  }

  public async createIssue(issue: IIssue): Promise<void> {
  
    await this.model.createIssue(issue);
  }

  public async editIssueDescription(issueId: number, description: string): Promise<void> {
  
    await this.model.editIssueDescription(issueId, description);
  }

  public async deleteIssue(issueId: number): Promise<void> {
  
    await this.model.deleteIssue(issueId);
  }
}

export default IssuesService;