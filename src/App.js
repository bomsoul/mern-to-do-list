import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import EditTodo from './component/edit-todo.component';
import createTodo from './component/create-todo.component';
import TodosList from './component/todos-list.component';
import logo from './logo.png';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="www.google.com"  target="_blank">
              <img src={logo} width="30" height="30" alt="www.google.com"/>
            </a>
            <Link to={'/'} className="navbar-brand">MERN-Stack Todo App</Link>
            <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to='/' className="nav-link">Todos</Link>
              </li>
              <li class="nav-item">
                <Link to='/create' className="nav-link">Create</Link>
              </li>
            </ul>
          </div> 
          </nav>

          <Route path="/" exact component={TodosList}/>
          <Route path="/edit/:id" component={EditTodo}/>
          <Route path="/create" component={createTodo}/>
        </div>
      </Router>
    )
  }
}

export default App;
