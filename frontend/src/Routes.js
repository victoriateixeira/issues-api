import { Route, Switch} from 'react-router-dom'
import IssueManager from './pages/issueManager';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={ IssueManager } exact />
    </Switch>
  );
}

export default Routes;