import React from 'react';

export default class GrainCount extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>App1</th>
                                <th>DATABASE</th>
                                <th>Application</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="table-active">Active</td>
                                <td class="table-success">Success</td>
                                <td class="table-info">Info</td>
                                <td class="table-danger">Danger</td>
                                <td class="table-warning">Warning</td>
                                <td class="table-active">Active</td>
                                <td class="table-success">Success</td>
                                <td class="table-info">Info</td>
                                <td class="table-danger">Danger</td>
                                <td class="table-warning">Warning</td>
                                <td class="table-warning">Warning</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
          )
        }
    }