import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IIssue } from '../interfaces';

export default class IssuesModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getIssue(issueId: number): Promise <IIssue> {
    const [result] = await this.connection.execute(
      `SELECT * FROM Issues.issues
      WHERE id=?;`[issueId],
    );
    return result;
  }

  public async createIssue(issue: IIssue): Promise<IIssue> {
    const { title, description } = issue;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Issues.issues (title, amount) 
      VALUES (?,?)`, 
      [title, description],
    );
    return { id: insertId, ...issue };
  }

  public async editIssueDescription(issueId: number, issueDescription: string): Promise<void> {
    await this.connection.execute(`UPDATE Issues.issues
      SET description = ?
      WHERE id =  ?`, [issueDescription, issueId ]);
  }

  public async deleteIssue(issueId: number): Promise<void> {
    await this.connection.execute(`DELETE Issues.issues
      WHERE id =  ?`, [ issueId ]);
  }
}