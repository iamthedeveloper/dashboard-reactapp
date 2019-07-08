import React from 'react';

export default class CubeCount extends React.Component {
    constructor() {
        super();
    }
    
    createTableData(type) {
        return type.map((value,i) => {
        return <td style={{ backgroundColor: "black", color: "#fff"}}> {value}</td>
        });
    }

    createTableHead(header) {
        return header.map((value) => {
            return <th>{value}</th>
        });
    }

    render() {
        return (
            <table className="table mx-auto" id={this.props.table}>
                <caption>{this.props.caption}</caption>
                <thead>
                    <tr>
                    {  this.props.headers.map((head) => {
                            {return<th>{head.title}</th>}
                        })
                    }  
                    </tr> 
                </thead>
                <tbody>
                    {
                        Object.values(this.props.data).map((type) => {
                            {return <tr>{this.createTableData(type)}</tr>}
                        })
                    }
                </tbody>
            </table>
          )
        }
    }