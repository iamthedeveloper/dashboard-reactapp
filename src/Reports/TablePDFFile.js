import React from 'react';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';;

export default class PDFFile extends React.Component {
    constructor() {
        super();
        this.generate = this.generate.bind(this);
    }

    generate() {
        let columns = []
        this.props.headers.map((head) => {
                console.log("TablePDFFile Head ",head)
                columns.push(head)
            });

        let rows = [];
            Object.values(this.props.data).map((type) => {
                rows.push(type);
            })

        var doc = new jsPDF('p', 'pt', 'A4');

        var res = doc.autoTableHtmlToJson(document.getElementById("tradeCount2"), true);
        doc.autoTable(columns, rows, {margin: {top: 80}});

        res = doc.autoTableHtmlToJson(document.getElementById("tradeCount"), true);
        doc.autoTable(columns, rows, {margin: {top: 80}});
        doc.save("test.pdf");

    }
    render() {
        return (
            <div>
                <button onClick={this.generate}>Generate pdf</button>
            </div> 
        )
    }
}
