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
        this.setState({
            disciplineId,
            place,
            datetime,
            studentsIds,
            disciplineClass,
            disciplineName,
            monitorId
        })
        console.log(this.props)
    }

    render() {
        
        return (
            <div className="col-md-3 col-sm-10 mb-5">
                <StyledLink1 >
                    <Card1 className="card">
                        <div class="col s6 m4">      
                            <div class="card-panel">
                                <div class="card-title">{this.state.disciplineName}</div>
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