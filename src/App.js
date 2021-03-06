import React from 'react';
import './App.css';
import Precadastro from './components/Pre-cadastro/pre-cadastro';
import Cadastro from './components/Cadastro/cadastro';
import Navbar from './components/Navbar/navbar';
import Navbarperfil from  './components/Navbar-Perfil/navbar-perfil';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route';
import Perfil from './components/Perfil/Perfil';
import Home from './components/Home/Home';
import Login from './components/Login/login'
import Monitoria from './components/Monitoria/monitoria';
import CadastroMonitoria from './components/Cadastro/cadastromonitoria'


function App() {
  return (
    <Router>
        <div class = "App-link">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <Route path="/precadastro" exact strict render={
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
          <Route path="/perfil" exact strict render={
            ()=>{
            return (
            <div>
              <Navbarperfil/>
              <Perfil/>
            </div>
            )
            }
          }/>
          <Route path="/" exact strict render={
            ()=>{
            return (
            <div>
              <Navbar/>
              <Home/>
            </div>
            )
            }
          }/>
          <Route path="/login" exact strict render={
            ()=>{
            return (
            <div>
              <Navbar/>
              <Login/>
            </div>
            )
            }
          }/>
          <Route path="/monitoria" exact strict render={
            ()=>{
            return (
              <div className="row">
                <Navbarperfil/>
                <div className="">
                  <Monitoria/>
                </div>
              </div>
            )
            }
          }/>
           <Route path="/cadastromonitoria" exact strict render={
            ()=>{
            return (
              <div>
                <Navbarperfil/>
                <CadastroMonitoria/>
              </div> 
              )
            }
          }/>
          
        </div> 
      </Router>
  );
}

export default App;