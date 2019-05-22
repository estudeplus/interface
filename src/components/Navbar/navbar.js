import React, { Component } from 'react';
import '../../stylesheet/Navbar/navbar.css'

class Navbar extends Component {
    render() {
      return (
      <div>
         <nav>
            <div class="nav-wrapper nav">
            <a href="/menu" class="brand-logo">
                <img width="255" height="60" src={require('../../img/logo01pequena.png')}></img>
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><a href="/">Pré-cadastro</a></li>
                <li><a href="/cadastro">Cadastro</a></li>
                <li><a href="/cadastro">Login</a></li>
                <li><a href="/manu">Menu</a></li>
            </ul>
            </div>
        </nav>
      </div>
    )
  }
}
export default Navbar