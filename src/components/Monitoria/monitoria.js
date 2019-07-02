import React, { Component } from 'react'
import axios from 'axios';

import MonitoriaCard from './monitoriaCard';

export default class Monitoria extends Component {
    state = {
        url:"http://104.198.27.17:3000/monitoring_event",
        monitoria: null
    };

    async componentDidMount(){
        const res = await axios.get(this.state.url);
        this.setState({monitoria: res.data});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.monitoria ? (
                    <div className ="row">
                        {this.state.monitoria.map(monitoria => 
                            <MonitoriaCard
                                key={monitoria.discipline.id}
                                monitorId={monitoria.monitorId}
                                place={monitoria.place}
                                datetime={monitoria.datetime}
                                studentsIds={monitoria.studentsIds._id}
                                disciplineClass={monitoria.discipline.class}
                                disciplineId={monitoria.discipline.id}
                                disciplineName={monitoria.discipline.name}
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

