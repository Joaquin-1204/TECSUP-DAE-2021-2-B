import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import {Route,Link,BrowserRouter,Routes} from 'react-router-dom'

const routing = (
  <div>
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Laboratorio 13</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usuarios">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/:id" element={<Users />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  </div>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);


