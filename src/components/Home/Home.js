import React, { Component } from 'react'
import '../../stylesheet/Home/home.css'

 

export default class Home extends Component {

   
    
    render() {
        return (
            <div>
                <div class="bloco" id="centro1">
                    <img className="logomeio"width="1020" height="240" src={require('../../img/logo01.png')} alt="logo" ></img>
                    <h3> O que é o Estude+?</h3>
                    <br></br>
                    <h5>O Estude+ é uma ferramenta online que busca ajudar na relação entre monitores e alunos.</h5>
                    <h5>Com ele você pode acessar datas, horários e locais de monitoria e ser avisado sobre novas monitorias e cancelamentos.</h5>
                    <h5>Você pode ainda confirmar presença nas monitorias, deixando assim o monitor ciente da quantidade de alunos presentes!</h5>
                </div>
                <div class="bloco2" id="centro2">
                    <br></br>
                    <br></br>
                    <img className="logomeio" width="600" height="300" src={require('../../img/unb.svg')} alt="unb"></img>
                    <h3> A Universidade de Brasília</h3>
                    <br></br>
                    <h5>Uma Universidade transformadora, com a missão de produzir, integrar e divulgar conhecimento,</h5>
                    <h5>formando cidadãos comprometidos com a ética, a responsabilidade social e o desenvolvimento sustentável.</h5>
                    <h5>Essa é a Universidade de Brasília, cuja trajetória se entrelaça com a história da capital do país.</h5>
                    <br></br>
                    <h5>Resultado do sonho e do trabalho de educadores como Darcy Ribeiro e Anísio Teixeira, a UnB é,</h5>
                    <h5>desde 1962, ano de sua criação, uma das principais referências acadêmicas nacionais. </h5>
                    <h5>A diversidade cultural presente em seus quatro campi é uma de suas características marcantes. A pluralidade, </h5>
                    <h5>aliada à busca permanente por soluções inovadoras, move a produção científica e o cotidiano da instituição.</h5>
                    <br></br>
                    <h5>A UnB segue atuante em todas as áreas do conhecimento, aberta às principais demandas do Brasil e do mundo.</h5>
                    <h5>Com olhar apontado para o futuro e estima pelo caminho já trilhado,</h5>
                    <h5>a Universidade se consolida como organismo indispensável para o desenvolvimento de uma sociedade mais íntegra e democrática.</h5>

                </div> 
                <div class="bloco" id="centro">
                </div> 
            </div>
        )

    }
}
