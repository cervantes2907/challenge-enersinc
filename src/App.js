
import React, {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import './App.css';
import 'antd/dist/antd.css';
import { Menu } from './components/navigation/Menu';
import { Provider } from "react-redux";
import store from "./store";
import { TableList } from './components/table/TableList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          
          <header>
            <Menu />
          </header>
          <main>
          <Switch>
            <Route exact path="/usuarios" component={TableList}/>
            <Route ecxact path="/" component={Home} />
          </Switch>
          </main>
        </Router>
      </div>
      </Provider>
  );
}

export default App;
