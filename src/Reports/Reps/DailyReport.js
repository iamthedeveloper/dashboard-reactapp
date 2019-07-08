import React from "react";
import * as jsPDF from "jspdf";
import "jspdf-autotable";

import FORTradeCount from './FORTradeCount';
import CubeCount from "./CubeCount";
import TopNavBar from '../../TopNavBar';

export default class DailyReport extends React.Component {
  constructor() {
    super();
    this.generate = this.generate.bind(this);
    this.state = {
      forTradeCount: {
        columns: [
          { title: "Time", id: "Time" },
          { title: "Exploration", id: "Exploration" },
          { title: "Hour", id: "Hour" },
          { title: "BizA", id: "BizA" },
          { title: "BizB", id: "BizB" },
          { title: "BizC", id: "BizC" },
          { title: "BizD", id: "BizD" },
          { title: "BizE", id: "BizE" },
          { title: "BizF", id: "BizF" },
          { title: "BizG", id: "BizG" },
          { title: "BizH", id: "BizH" }
        ],
        T1: {
          "1": [
            "Time",
            "Timer",
            "07:00",
            75777,
            260160,
            430345,
            748774,
            9472,
            405678,
            185348,
            2782368
          ],
          "2": [
            "Time",
            "Timer",
            "12:00",
            85777,
            270160,
            440345,
            758774,
            9772,
            415678,
            195348,
            2882368
          ],
          "3": [
            "Time",
            "Timer",
            "16:00",
            95777,
            280160,
            450345,
            768774,
            9872,
            425678,
            205348,
            2982368
          ]
        },
        T2: {
          "1": [
            "Timer",
            "Timer",
            "07:00",
            75777,
            230160,
            400345,
            708774,
            9472,
            405678,
            185348,
            2782368
          ],
          "2": [
            "Timer",
            "Timer",
            "12:00",
            87777,
            250160,
            430345,
            738774,
            9772,
            425678,
            195348,
            2982368
          ],
          "3": [
            "Timer",
            "Timer",
            "16:00",
            93777,
            280160,
            460345,
            778774,
            9872,
            445678,
            205348,
            3082368
          ]
        }
      },
      eventCount: {
        columns: [
          { title: "BizA", id: "BizA" },
          { title: "BizB", id: "BizB" },
          { title: "BizC", id: "BizC" },
          { title: "BizD", id: "BizD" },
          { title: "BizE", id: "BizE" },
          { title: "BizF", id: "BizF" },
          { title: "BizG", id: "BizG" },
          { title: "BizH", id: "BizH" },
          { title: "BizI", id: "BizI" }
        ],
        T1: { 1: [100, 150, 180, 200, 220, 230, 250, 290, 300] },
        T2: { 1: [110, 180, 280, 300, 320, 330, 350, 390, 400] }
      }
    };
  }

  generate() {
    let forColumns = [];
    this.state.forTradeCount.columns.map(head => {
      console.log("TablePDFFile Head ", head);
      forColumns.push(head);
    });
    let cubeColumns = [];
    this.state.eventCount.columns.map(head => {
      console.log("TablePDFFile Head ", head);
      cubeColumns.push(head);
    });
    let rows = [];
    Object.values(this.state.forTradeCount.T1).map(type => {
      rows.push(type);
    });
    let rows2 = [];
    Object.values(this.state.forTradeCount.T2).map(type => {
      rows2.push(type);
    });
    let rows3 = [];
    Object.values(this.state.eventCount.T1).map(type => {
      rows3.push(type);
    });
    let rows4 = [];
    Object.values(this.state.eventCount.T2).map(type => {
      rows4.push(type);
    });

    var doc = new jsPDF("p", "pt", "A4");
    var header = function(data) {
      doc.setFontSize(18);
      doc.setTextColor(40);
      doc.setFontStyle("normal");
      doc.text("App2-RefApp Checks", data.settings.margin.left, 50);
    };

    var res = doc.autoTableHtmlToJson(
      document.getElementById("tradeCount2"),
      true
    );
    doc.autoTable(forColumns, rows, {
      margin: { top: 80 },
      beforeApp2geContent: header
    });

    res = doc.autoTableHtmlToJson(document.getElementById("tradeCount"), true);
    doc.autoTable(forColumns, rows2, {
      margin: { top: 80 },
      beforeApp2geContent: header
    });

    res = doc.autoTableHtmlToJson(
      document.getElementById("eventCountT1"),
      true
    );
    doc.autoTable(cubeColumns, rows3, {
      margin: { top: 80 },
      beforeApp2geContent: header
    });

    res = doc.autoTableHtmlToJson(
      document.getElementById("eventCountT2"),
      true
    );
    doc.autoTable(cubeColumns, rows3, {
      margin: { top: 80 },
      beforeApp2geContent: header
    });

    doc.save("test.pdf");
  }
  render() {
    return (
      <div className="container-fluid">
      <TopNavBar></TopNavBar>
        <div className="row">
            <div className="mx-auto">
            <h2> 
                <sApp2n className="badge mx-auto" style={{color:"#b7751d"}}>CHECKS</sApp2n>
            </h2>
            </div>
        </div>
        <div className="row">
          <FORTradeCount
            table={"tradeCount"}
            headers={this.state.forTradeCount.columns}
            data={this.state.forTradeCount.T1}
            caption={"Time Checks"}
          />
        </div>
        <div className="row" />
        <div className="row">
          <FORTradeCount
            table={"tradeCount2"}
            headers={this.state.forTradeCount.columns}
            data={this.state.forTradeCount.T2}
            caption={"Timer Checks"}
          />
        </div>
        <div />
        <div className="row">
          <CubeCount
            table={"eventCountT1"}
            headers={this.state.eventCount.columns}
            data={this.state.eventCount.T1}
            caption={"Time Cube Check"}
          />
        </div>
        <div className="row">
          <CubeCount
            table={"eventCountT2"}
            headers={this.state.eventCount.columns}
            data={this.state.eventCount.T2}
            caption={"Timer Cube Check"}
          />
        </div>
        <div className="row">

          <div className="mx-auto">
            <button type="button" className="btn btn-dark btn-block" onClick={this.generate}>
                    <sApp2n className="glyphicon glyphicon-circle-arrow-down"></sApp2n>
                    Download Report
            </button>
          </div>
        </div>
      </div>
    );
  }
}
