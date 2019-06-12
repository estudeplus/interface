import React, { Component } from 'react'
import '../../stylesheet/Perfil/perfil.css'

export default class Perfil extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul class="right hide-on-med-and-down">
          <li><a href="/">Matérias</a></li>
          <li><a href="/cadastro">Monitores</a></li>
          <li><a href="/cadastro">Monitorias</a></li>
          <li><a href="/manu">Grupo de Estudos</a></li>
        </ul>
      </div>
    )
  }
}
