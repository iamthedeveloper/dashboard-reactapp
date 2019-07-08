import React from 'react';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';;

export default class PDFFile extends React.Component {
    constructor() {
        super();
        this.generate = this.generate.bind(this);
    }
    // this is the break point..............
    // this is the break point..............
    // this is the break point..............
    generate() {
        let headerList = []
        this.props.headers.map((topHeader) => {
            let header = [];
            //console.log(topHeader);
            topHeader.map((head) => {
                //console.log("PDFFile Head ",head)
                header.push(head)
            });
            headerList.push(header)
        })
        console.log("headerList : ",headerList);

        let rows = [];
        this.props.data.map((topData) => {
            let row = [];
            Object.values(topData).map((type) => {
                row.push(type);
                //console.log("Rows: " ,rows);
            })
            rows.push(row);
        })
        console.log("Rows: " ,rows);

        let head = [headerList];
        let body =  rows;

        let doc = new jsPDF('p', 'pt');
        for(let i=0;i<rows.length;i++) {
            //console.log(head[i] +" : "+ rows[i]);
            doc.autoTable({head: head[i], body: rows[i]});
            doc.autoTable({html: '#table'+i, startY: (100)});                   
        }
        doc.save("table.pdf");
    }
    render() {
        return (
            <div>
                <button onClick={this.generate}>Generate pdf</button>
            </div> 
        )
    }
}
