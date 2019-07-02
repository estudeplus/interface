import React, { Component } from 'react';
import '../../stylesheet/Cadastro/cadastro.css'
import axios from 'axios'

class CadastroMonitoria extends Component {

    state ={
      disciplineid:'',
      disciplinename:'',
      disciplineclass:'',
      studentsIds:'',
      monitorId:'',
      place:'',
      datetime:'',
    }
    handlechangeDisciplineName = event => {
      this.setState({
        disciplinename: event.target.value
      })
    }
    handlechangeDisciplineClass = event => {
      this.setState({
        disciplineclass: event.target.value
      })
    }
    handlechangePlace = event => {
      this.setState({
        place: event.target.value
      })
    }
    handlechangeDate = event => {
      this.setState({
        datetime: event.target.value
      })
    }
    handlechangeIdMonitor = event => {
      this.setState({
        monitorId: event.target.value
      })
    }
    
    handleKeyDown = event => {
      if (event.key === 'Enter') {
        if(this.state.disciplinename===''){
          alert("Nome necessario para cadastro")
        }else if(this.state.disciplineclass===''){
          alert("Classe necessaria para cadastro")
        }else if(this.state.place===''){
          alert("Lugar necessario para cadastro")
        }else{
          this.postmethod()
        }
      }
    }
    postmethod() {
      let resp = {
          discipline: {
            id: "545ccb5",
            name: this.state.disciplinename,
            class: this.state.disciplineclass
          },
          studentsIds: [],
          _id: "5d1ac612f2c1qwer00114eb2a9",
          monitorId: this.state.monitorId,
          place: this.state.place,
          datetime: "2019-08-11T"+this.state.datetime+":00.000Z"
      }
      let data = JSON.stringify(resp)
      axios({
        method: 'POST',
        baseURL:
          'http://34.67.167.51:3000/monitoring_management/monitoring_event/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }).then(resp => {
        console.log(resp)
        window.location = '/monitoria'
      })
    }
    handleClick(){
      if(this.state.disciplinename===''){
        alert("Nome necessario para cadastro")
      }else if(this.state.disciplineclass===''){
        alert("Classe necessaria para cadastro")
      }else if(this.state.place===''){
        alert("Lugar necessario para cadastro")
      }else{
        this.postmethod()
        
      }
    }

    render() {
      return (
      <div>
        <div class="card box1">
            <br></br>
            <h2 className="texto">Criar Monitoria</h2>


<div class="card-content">
                  <div class="row">
              <div class="input-field col s12">
                <input id="icon_prefix" type="text" class="validate"
                onChange={this.handlechangeDisciplineName}
                value={this.state.disciplinename}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="name">Disciplina</label>
              </div>
              <div class="input-field col s12">
                <input id="icon_prefix" type="text" class="validate"
                onChange={this.handlechangeDisciplineClass}
                value={this.state.disciplineclass}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="first_name2">Turma</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="text" class="validate"
                onChange={this.handlechangePlace}
                value={this.state.place}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="class">Sala</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="text" class="validate"
                onChange={this.handlechangeIdMonitor}
                value={this.state.monitorId}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="class">Id Monitor</label>
              </div>
              <div class="input-field col s12">
                <input id="password" type="text" class="validate"
                onChange={this.handlechangeDate}
                value={this.state.datetime}
                onKeyDown={this.handleKeyDown}
                required/>
                <label for="icon_prefix"></label>
                <label class="active" for="class">Horário</label>
              </div>

            </div>
          </div>
          <div class="card-tabs">
            <div class="tabs tabs-fixed-width">
              <li class="tab">
                <button class=" text-center btn waves-effect waves-light" type="submit" name="action" onClick={() => this.handleClick()}>Criar monitoria
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
export default CadastroMonitoria