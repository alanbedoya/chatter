import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Login, Chats } from './components';

function App() {
  return (
    <div className='App h-screen bg-gradient-to-r from-pink-400 to-red-400'>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/chats'>
              <Chats />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
