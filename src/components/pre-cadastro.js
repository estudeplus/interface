import React, { Component } from 'react';
import '../stylesheet/pre-cadastro.css'

class Precadastro extends Component {
  render() {
    return (
    <div>
      <div className="nav">
        <h1>Estude+</h1>
      </div>
      <div className="logoCentral">
        {/* <img className="logo" src={require(`../img/logo`)}/> */}
      </div>
      <div className="matricula">
        <h5>Matrícula</h5>
        <input type="text" style={{width: "370px"}} name="matricula" />
      </div>
    </div>  
    )
  }
}

export default Precadastro
