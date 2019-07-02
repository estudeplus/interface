import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Sprite1 = styled.img`
    width: 5em;
    height: 5em;
    display: none;
    `;

const Card1 = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(0.25,0.8,0.25,1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    }    
    -moz-user-selet: none;
    -website-user-select: none;
    user-select:none;
    -o-user-select: none;
`;

const StyledLink1 = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &active{
        text-decoration: none;
    }
`;

export default class MonitoriaCard extends Component {
    state ={
        monitorId:"",
        place:"",
        datetime:"",
        studentsIds:"",
        disciplineClass:"",
        disciplineId:"",
        disciplineName:""
    };

    componentDidMount(){
        // const name = this.props.name;
        // const url = this.props.url;
        const {monitorId,place,datetime,studentsIds,disciplineClass,disciplineId,disciplineName} = this.props;
        const monitoriaIndex = monitorId;
        console.log(disciplineId)
        this.setState({
            disciplineId,
            place,
            datetime,
            studentsIds,
            disciplineClass,
            disciplineName,
            monitorId
        })
    }

    render() {
        
        return (
            <div className="col-md-3 col-sm-10 mb-5">
                <StyledLink1 >
                    <Card1 className="card">
                        {/* <h5 className="card-header">{this.state.monitoriaIndex}</h5>
                            <Sprite1 className="card-img-top rounded mx-auto mt-2" 
                            onLoad={()=> this.setState({imageLoading: false})}
                            onError={()=>this.setState({toManyRequests: true})}
                            style={
                                this.state.toManyRequests ?{display:"none"}:
                                this.state.imageLoading?null:{display:"block"}
                            }/>

                            <div className="card-body mx-auto"><h6 className="card-title">
                            {this.state.name}
                                </h6>
                            </div> */}
                                <div class="col s6 m4">
                                    
                                <div class="card-panel">
                                    <div class="card-title">Código da Disciplina: {this.state.disciplineId}</div>
                                    <div>Nome da Disciplina: {this.state.disciplineName}</div>
                                    <div>ID do Monitor: {this.state.monitorId}</div>
                                    <div>Sala: {this.state.place}</div>
                                    <div>Horário: {this.state.datetime}</div>
                                        
                                    </div>
                            </div>
                    </Card1>
                </StyledLink1>
            </div>
        )
    }
}
