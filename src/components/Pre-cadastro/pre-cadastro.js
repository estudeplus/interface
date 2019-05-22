import React, { Component } from 'react';
import '../../stylesheet/Pre-cadastro/pre-cadastro.css'

class Precadastro extends Component {
  render() {
    return (
    <div>
      <div class="card box1">
          <br></br>
          <h2 className="texto">Pré-cadastro</h2>
          <br></br>
          <br></br>
          <div class="card-content">
                <div class="row">
            <div class="input-field col s12">
              <input id="icon_prefix" type="text" class="validate"/>
              <label for="icon_prefix"></label>
              <label class="active" for="first_name2">Matrícula</label>
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
export default Precadastro
