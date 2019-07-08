import React from "react";

export default class FORTradeCount extends React.Component {
  constructor() {
    super();
  }

  createTableData(type) {
    return type.map((value, i) => {
      //console.log(i +" "+ value);
      return (
        <td
          style={{ backgroundColor: "black" }}
          className={
            (i === 3 && value < 76000) ||
            (i === 4 && value < 240000) ||
            (i === 5 && value < 430000) ||
            (i === 6 && value < 740000) ||
            (i === 7 && value < 9500) ||
            (i === 8 && value < 415000) ||
            (i === 9 && value < 2000000)
              ? "tdWarnColor"
              : "tdPrimaryColor"
          }
        >
          {" "}
          {value}
        </td>
      );
    });
  }

  createTableHead(header) {
    return header.map(value => {
      return <th>{value}</th>;
    });
  }

  render() {
    return (
      <table className="table mx-auto" id={this.props.table}>
        <caption>{this.props.caption}</caption>
        <thead>
          <tr>
            {this.props.headers.map(head => {
              {
                return <th>{head.title}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {Object.values(this.props.data).map(type => {
            {
              return <tr>{this.createTableData(type)}</tr>;
            }
          })}
        </tbody>
      </table>
    );
  }
}
