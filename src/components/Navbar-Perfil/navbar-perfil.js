import React, { Component } from 'react'

export default class Navbarperfil extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper nav">
                        <img width="255" height="60" src={require('../../img/logo01pequena.png')} alt="logo"></img>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/perfil">SeuNome</a></li>
                    </ul>
                    </div>
                </nav>  
            </div>
        )
    }
}
