import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components';

function App() {
  return (
    <div className='App h-screen bg-gradient-to-r from-pink-400 to-red-400'>
      <Router>
        <Switch>
          <Route path='/' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
