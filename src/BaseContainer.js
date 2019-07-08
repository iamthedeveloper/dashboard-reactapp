import React from 'react';
import MyBarChart from './MyBarChart'
import axios from "axios";
import Counter from './Counter'

export default class BaseContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    "first" : [130,150,180,200,220,230,250,290,300,320,330,350,370],
                    "second" :[150,180,280,300,320,330,350,390,400,420,430,450,470],
                    "third" : [170,180,230,280,300,350,380,390,400,420,430,450,470],
                },
                {
                    "first" : [100,150,180,200,220,230,250,290,300,320,330,350,370],
                    "second" :[110,180,280,300,320,330,350,390,400,420,430,450,470],
                    "third" :[130,180,230,280,300,350,380,390,400,420,430,450,470],
                },
                {
                    "first" : [120,150,180,200,220,230,250,290,300,320,330,350,370],
                    "second" :[140,180,280,300,320,330,350,390,400,420,430,450,470],
                    "third" :[150,180,230,280,300,350,380,390,400,420,430,450,470],
                }
                
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Counter title={"Home"} count={"1500"} lasttime={"Jun 17, 1:00 PM"} />
                    </div>
                    <div className="col-4">
                        <Counter title={"Auto"} count={"1450"} lasttime={"Jun 17, 12:00 PM"} />
                    </div>
                    <div className="col-4">
                        <Counter title={"Credit"} count={"1400"}  lasttime={"Jun 17, 11:00 AM"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <MyBarChart dataset={this.state.todos[0]} chartTitle={"Home Loans"}/>
                    </div>
                    <div className="col-4">
                        <MyBarChart dataset={this.state.todos[1]} chartTitle={"Auto Loans"}/>
                    </div>
                    <div className="col-4">
                        <MyBarChart dataset={this.state.todos[2]} chartTitle={"Commercial Loans"}/>
                    </div>
                </div>
            </div>
        )
    }
}