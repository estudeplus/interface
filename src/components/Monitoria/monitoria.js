import React, { Component } from 'react'
import axios from 'axios';

import MonitoriaCard from './monitoriaCard';

export default class Monitoria extends Component {
    state = {
        url:"http://104.198.27.17:3000/monitoring_event",
        studentsIds:'',
        monitorId: " ",
        discipline: {
            id: " ",
            name:  " ", 
            class: " " 
          },
          place: " ",
          datetime: " "
    }

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({
            studentsIds: res.data[0],
            monitorId: res.data[0],
            discipline: {
                id: res.data[0],
                name:  res.data[0], 
                class: res.data[0] 
            },
            place: res.data[0],
            datetime: res.data[0]
        });

    }

    render() {
        return (
            <React.Fragment>
                {this.state.monitor ? (
                    <div className ="row">
                        {this.state.monitor.map( monitor=> 
                            <MonitoriaCard
                                key={monitor.name}
                                name={monitor.name}
                                url={monitor.url}
                            />
                        )}
                    </div>
                ) : (
                    <h1>Loading</h1>
                )}  
            </React.Fragment>            
        );
    }
}

