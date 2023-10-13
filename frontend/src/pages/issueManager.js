import React, { useState, useEffect } from 'react';
import { postAPI, requestAPI } from '../deliveryApi';


function IssueManager() {

 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [issuesList, setIssuesList] = useState([])


 useEffect(() => {
  const fetchIssuesList = async () => {
    const response = await requestAPI('/issues');
      setIssuesList(response)
  }

  fetchIssuesList()
}, []);


 const createIssue = async (title, description) => {
  const newIssue = {title, description}
  await postAPI('issues', newIssue)
  setIssuesList([...issuesList, newIssue])
 }

  return (
    <>
    <main className="container">
      <h1>Issue Manager</h1>

      <h2>Current Issues</h2>
      <div>{issuesList.map((issue) => {
        return <p>{issue.title}</p>
      })}
      </div>

      <h2>Add a new issue</h2>
      <form>
        <label htmlFor="title">
          <p>Title</p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          <p>Description</p>
          <input
            type="text"
            name="description"
            placeholder="description"
            value={ description }
            onChange={ (e) => setDescription(e.target.value) }
          />
        </label>
      
          <button
            type="button"
            onClick={ createIssue }
          >
            Create Issue
          </button>
      </form>
    </main>
  </>
  );
}

export default IssueManager;
