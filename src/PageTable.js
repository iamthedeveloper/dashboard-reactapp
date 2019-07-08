import React from 'react';

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class PageTable extends React.Component {
  constructor() {
    super();
  }
  render() {
    const data = [
      {
        date: '10-JUN-2019',
        count: 250098,
      },
      {
        date: '11-JUN-2019',
        count: 260098,
      },
      {
        date: '12-JUN-2019',
        count: 240098,
      },
      {
        date: '13-JUN-2019',
        count: 275098,

      }
  ];
  const data2 = [
    {
      forName: 'Source One',
      forCount: 25098,
    },
    {
      forName: 'Source Two',
      forCount: 458090,
    },
    {
      forName: 'Source Three',
      forCount: 2423424,
    },
    {
      forName: 'Source Four',
      forCount: 24234246,

    },
    {
      forName: 'Source Five',
      forCount: 24234246,

    },
];
    return (
      <div style={{ margin: "15px"}}>
        <ReactTable
          showPagination={false}  
          data={data}
          defaultPageSize={5}
          className="-striped -highlight"             
          columns={[
            {
              columns: [
                {
                  Header: "COB Date",
                  accessor: "date"
                },
                {
                  Header: "Total Count",
                  accessor: "count"
                }
              ]
            }
          ]}
          SubComponent={row => {
            return (
              <div style={{ padding: "20px" }}>
                <ReactTable
                  showPagination={false}
                  data={data2}
                  defaultPageSize={5}
                  columns={[
                    {
                      columns: [
                        {
                          Header: "Name",
                          accessor: "forName"
                        },
                        {
                          Header: "Count",
                          accessor: "forCount"
                        }
                      ]
                    }
                  ]}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}