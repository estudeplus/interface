import React, { Component } from 'react';
import '../../stylesheet/Cadastro/cadastro.css'
import axios from 'axios'

class Cadastro extends Component {

    state ={
      matricula:'',
      nome:'',
      email:'',
      senha:'',
      senha2:''
    }  
    handlechangeMatricula = event => {
      this.setState({
        matricula: event.target.value
      })
    }
    handlechangeNome = event => {
      this.setState({
        nome: event.target.value
      })
    }
    handlechangeEmail = event => {
      this.setState({
        email: event.target.value
      })
    }
    handlechangeSenha = event => {
      this.setState({
        senha: event.target.value
      })
    }
    handlechangeConfirmarSenha = event => {
      this.setState({
        senha2: event.target.value
      })
    }
    handleKeyDown = event => {
      if (event.key === 'Enter') {
        if(this.state.nome===''){
          alert("nome necessaria para cadastro")
        }else if(this.state.email===''){
          alert("email necessaria para cadastro")
        }else if(this.state.senha===''){
          alert("senha necessaria para cadastro")
        }else if(this.state.senha != this.state.senha2){
          alert("É necessário que as duas senhas sejam iguais")
        }else{
          this.postmethod()
        }

      }
    }
    postmethod() {
      let resp = {
        student_id: this.state.matricula,
        name: this.state.nome,
        email: this.state.email,
        password: this.state.senha
    }
      let data = JSON.stringify(resp)
      axios({
        method: 'GET',
        baseURL:
          'http://34.67.167.51:3000/profile/register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }).then(resp => {
        console.log(resp)
      })
    }

    render() {
      return (
      <div>
        <div class="card box1">
            <br></br>
            <h2 className="texto">Cadastro</h2>
            
            <div class="card-content">
                  <div class="row">
              <div class="input-field col s12">
                <input id="icon_prefix" type="text" class="validate"
                onChange={this.handlechangeNome}
                value={this.state.nome}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="first_name2">Nome</label>
              </div>
              <div class="input-field col s12">
                <input id="icon_prefix" type="text" class="validate"
                onChange={this.handlechangeEmail}
                value={this.state.email}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="first_name2">e-mail</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="password" class="validate"
                onChange={this.handlechangeSenha}
                value={this.state.senha}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="password">senha</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="password" class="validate"
                onChange={this.handlechangeConfirmarSenha}
                value={this.state.senha2}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="password">confirmar senha</label>
              </div>
              
            </div>     
          </div>
          <div class="card-tabs">
            <div class="tabs tabs-fixed-width">
              <li class="tab">
                <button class=" text-center btn waves-effect waves-light" type="submit" name="action">Login
                  <i class="material-icons right">send</i>
                </button>  
              </li>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Cadastro
