
import React, {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import './App.css';
import 'antd/dist/antd.css';
import { Menu } from './components/navigation/Menu';
import  {CreatePeople}  from './components/create/CreatePeople';
import  {EditPeople} from './components/edit/EditPeople';

function App() {
  return (
    
    <div className="App">
      <Router>
        
        <header>
          <Menu />
        </header>
        <main>
        <Switch>
        <Route exact path="/editpeople" component={EditPeople} />
          <Route exact path="/createpeople" component={CreatePeople}/>
          <Route ecxact path="/" component={Home} />
        </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
