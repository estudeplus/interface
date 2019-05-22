import React from 'react';
import './App.css';
import Precadastro from './components/Pre-cadastro/pre-cadastro';
import Cadastro from './components/Cadastro/cadastro';
import Navbar from './components/Navbar/navbar';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route';

function App() {
  return (
    <Router>
        <div class = "App-link">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <Route path="/" exact strict render={
            ()=>{
              return (
              <div> 
                <Navbar/>
                <Precadastro/>
              </div>
              )
            }
          }/>
          <Route path="/cadastro" exact strict render={
            ()=>{
            return (
            <div>
              <Navbar/>
              <Cadastro/>
            </div>
            )
            }
          }/>
        </div> 
      </Router>
  );
}

export default App;
