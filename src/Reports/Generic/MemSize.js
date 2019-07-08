import React from 'react';
import TopNavBar from '../../TopNavBar';
import ReactTable from "react-table";
import VarRuns from './VarRuns'
import "react-table/react-table.css";

export default class MemSize extends React.Component {
  constructor() {
    super();
  }
  render() {
    const data = [
      {
        date: '06-15-2019',
        prevSize: '200',
        currSize:'180',
        diff:'20'
      },
      {
        date: '07-16-2019',
        prevSize: '180',
        currSize:'160',
        diff:'20'
      },
      {
        date: '08-17-2019',
        prevSize: '160',
        currSize:'140',
        diff:'20'
      },
      {
        date: '09-18-2019',
        prevSize: '140',
        currSize:'120',
        diff:'20'
      },
      {
        date: '06-19-2019',
        prevSize: '120',
        currSize:'100',
        diff:'20'
      }
  ];
    return (
      <div>
        <TopNavBar></TopNavBar>
        <div style={{ margin: "15px"}}>
          <h1 style={{textAlign:"center"}}>Memory Consumption</h1>
          <ReactTable
            showPagination={false}  
            data={data}
            defaultPageSize={5}
            className="-striped -highlight"             
            columns={[
              {
                columns: [
                  {
                    Header: "Date",
                    accessor: "date"
                  },
                  {
                    Header: "Previous Size",
                    id: "prevSize",
                    accessor: d => d.prevSize
                  },
                  {
                      Header: "Current Size",
                      id: "currSize",
                      accessor: d => d.prevSize
                  },
                  {
                      Header: "Difference",
                      id: "diff",
                      accessor: d => d.diff
                  }
                ]
              }
            ]}
          />
        </div>
        {/* <VarRuns /> */}
        </div>
    );
  }
}