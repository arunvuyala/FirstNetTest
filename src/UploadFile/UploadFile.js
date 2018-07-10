import React, { Component } from 'react';
import './UploadFile.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import ReactFileReader from 'react-file-reader';


class UploadFile extends Component {
state ={
data : [],
columnsT : []
}

handleFiles = files => {
  console.log(files[0]);
  var reader = new FileReader();
  reader.readAsText(files[0]);
  reader.onload = function(e) {
  processFiles();
 }
const processFiles = () =>{
  var csv = reader.result;
  var lines = csv.split("\n");
    var result = [];
    var tabHeaders=lines[0].split(",");
    var columnHeaders =[];
    for(var m=0;m<tabHeaders.length;m++){
      columnHeaders.push({
        Header: tabHeaders[m],
        accessor: tabHeaders[m],
        filterable:true,
        sortable:true
      })
    }
    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<tabHeaders.length;j++){
        obj[tabHeaders[j]] = currentline[j];
      }
      result.push(obj);
      }  
      // result= JSON.stringify(result);
  this.setState({
  data : result,
  columnsT : columnHeaders
  });
  }

}
  render() {
  let dataExists = this.state.data.length>0?true:false;
  let table=<div/>;
   if(dataExists) {
   table= <ReactTable
    data={this.state.data}
    columns={this.state.columnsT}
    className="-striped -highlight"
  />;
   }
    return (
      <div className="App">
      <div className ="App-header">
      <span>Please select upload to load a file</span>
      <ReactFileReader fileTypes={[".csv"]} handleFiles={this.handleFiles}>
  <div className ="upload-btn-wrapper"><button>Upload</button></div>
  </ReactFileReader>
  </div>
{table}
  </div>
    );
  }
}

export default UploadFile;
