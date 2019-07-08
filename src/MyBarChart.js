import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

export default class MyBarChart extends React.Component {
  state = {
    chartTitle : this.props.chartTitle,
    dataLine: {
      labels: [0,2,4,6,8,10,12,14,16,18,20,22,24],
      datasets: [
        {
          label: `Yr-2017`,
          fill: true,
          lineTension: 0.1,
          borderColor: "rgb(255,0,0)",
          borderJoinStyle: "miter",
          data: this.props.dataset.first,
        },
        {
          label: "Yr-2018",
          fill: true,
          lineTension: 0.3,
          borderColor: "rgb(0,0,255)",
          borderJoinStyle: "miter",
          data: this.props.dataset.second,
        },
        {
          label: "Yr-2019",
          fill: true,
          lineTension: 0.3,
          borderColor: "rgb(0,128,0)",
          borderJoinStyle: "miter",
          data: this.props.dataset.third,
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <span style={{color: "#080808"}}>{this.state.chartTitle}</span>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}