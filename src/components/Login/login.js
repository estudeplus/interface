import React, { Component } from 'react';
import '../../stylesheet/Cadastro/cadastro.css'

class Login extends Component {
    render() {
      return (
      <div>
        <div class="card box1">
            <br></br>
            <h2 className="texto">Cadastro</h2>
            <div class="card-content">
                  <div class="row">
              <div class="input-field col s12">
                <input id="icon_prefix" type="text" class="validate"/>
                <label for="icon_prefix"></label>
                <label class="active" for="first_name2">e-mail</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="password" class="validate"/>
                <label for="icon_prefix"></label>
                <label class="active" for="password">senha</label>
              </div>
            </div>     
          </div>
          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab">
                <button class="btn waves-effect waves-light" type="submit" name="action">Registrar
                </button>
              </li>
              <li class="tab">
                <button class="btn waves-effect waves-light" type="submit" name="action">Login
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
