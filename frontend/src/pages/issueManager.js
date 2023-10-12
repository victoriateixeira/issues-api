import React, { useState } from 'react';


function IssueManager() {

 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [issuesList, setIssuesList] = useState([])

//  const createIssue () => {
  // makes an api request to create new issue
//  }

  return (
    <>
    <main className="container">
      <h1>Issue Manager</h1>
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
