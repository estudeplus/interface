import React, { Component } from 'react';
import '../../stylesheet/Pre-cadastro/pre-cadastro.css';
import axios from 'axios';




class Precadastro extends Component {


  state ={
    matricula:''
  }  
  handlechangeMatricula = event => {
    this.setState({
      matricula: event.target.value
    })
  }
  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.postmethod()
    }
  }
  postmethod() {
		let resp = {
			student_id:this.state.matricula
		}
		let data = JSON.stringify(resp)
		axios({
			method: 'GET',
			baseURL:
				'http://34.67.167.51:3000/profile/pre-register',
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
          <h2 className="texto">Pré-cadastro</h2>
          <br></br>
          <br></br>
          <div class="card-content">
                <div class="row">
                  <div class="input-field col s12">
                    <input id="icon_prefix" type="text" class="validate"
                    onChange={this.handlechangeMatricula}
                    value={this.state.matricula}
                    onKeyDown={this.handleKeyDown}
                    required/>
                    <label for="icon_prefix"></label>
                    <label class="active" for="first_name2">Matrícula</label>
                  </div>
                </div>     
            </div>
            <a class="waves-effect waves-light btn">Cadastro
              <i class="material-icons right">send</i>
            </a> 
      </div>
    </div>  
    )
  }
}
export default Precadastro
