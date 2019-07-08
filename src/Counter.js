import React from 'react';

export default class Counter extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{marginLeft:"85px"}}>
                <div className="card">
                    <div className="content">
                        <div className="row top-row">
                            <div className="col-md-6 title-row my-auto">
                                <span>{this.props.title}</span>
                            </div>
                            <div className="col-md-6 count-row my-auto">
                                <span>{this.props.count}</span>
                            </div>
                        </div>
                        <div className="row">
                            <i style={{color:"#a9a9a9", marginLeft:"20px", marginTop:"9px"}} className="fa fa-clock-o" aria-hidden="true"></i>
                            <span style={{color:"#a9a9a9", marginTop:"5px", marginLeft:"5px"}}>{this.props.lasttime}</span>
                            <span style={{marginLeft:"38px"}}>
                                <i className="fa fa-refresh" aria-hidden="true" style={{color:"#a9a9a9", marginTop:"9px"}}></i>
                            </span>                                
                        </div>    
                        
                    </div>                        
                </div>
            </div>
        )
    }
}