import React, { Component } from 'react'
import '../../stylesheet/Home/home.css'

 

export default class Home extends Component {

   
    
    render() {
        return (
            <div>
                <div class="bloco" id="centro1">
                    <img className="logomeio"width="1020" height="240" src={require('../../img/logo01.png')} ></img>
                    <h3> O que é o Estude+?</h3>
                    <h5>wqekgiojqwegoijoweqigwejqgiowegqqwejgiowejqgiowjqgiowqwqiejgi</h5>
                </div>
                <div class="bloco2" id="centro2">
                    <br></br>
                    <br></br>
                    <img className="logomeio" width="600" height="300" src={require('../../img/unb.svg')} ></img>
                    <h3> A Universidade de Brasília</h3>
                    <h5>wqekgiojqwegoijoweqigwejqgiowegqqwejgiowejqgiowjqgiowqwqiejgi</h5>
                </div> 
                <div class="bloco green">
                    
                </div> 
            </div>
        )
    }
}
