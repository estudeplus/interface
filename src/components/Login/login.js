import React, { Component } from 'react';
import '../../stylesheet/Cadastro/cadastro.css'
import axios from 'axios';
import qs from 'qs';

class Login extends Component {
    state = {
      Email: '',
      Senha: ''
    }
    handlechangeEmail = event => {
      this.setState({
        Email: event.target.value
      })
    }
    handlechangeSenha = event => {
      this.setState({
        Senha: event.target.value
      })
    }
    handleKeyDown = event => {
      if (event.key === 'Enter') 
          return this.handleClick()

    }
    handleClick(){
      let login = {
        student_id: '',
        name:'',
        email: this.state.Email,
        password: this.state.Senha
      }
    
  
      axios({
        method: 'GET',
        baseURL:'http://34.67.167.51:3000/profile/register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: qs.stringify(login)
      }).then(resp => {
        console.log(resp)
        for(var i = 0; i < resp.data.length; i++){
          if((login.email === resp.data[i].email) && (login.password === resp.data[i].password)){
            console.log(resp)
            // return window.location="/perfil";
          }else{
            alert("Usuário ou senha Incorretos!")
          }
          
        }
      })
    }
    render() {
      return (
      <div>
        <div class="card box1">
            <br></br>
            <h2 className="texto">Login</h2>
            <div class="card-content">
                  <div class="row">
              <div class="input-field col s12">
                <input id="icon_prefix" type="text" class="validate"
                onChange={this.handlechangeEmail}
                value={this.state.Email}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="first_name2">e-mail</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="password" class="validate"
                onChange={this.handlechangeSenha}
                value={this.state.Senha}
                required
                onKeyDown={this.handleKeyDown}/>
                <label for="icon_prefix"></label>
                <label class="active" for="password">senha</label>
              </div>
            </div>     
          </div>
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleClick()}>Login 
                  <i class="material-icons right">send</i>
                </button>  
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
