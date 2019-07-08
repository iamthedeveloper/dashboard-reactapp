import React from 'react';
import './App.css';
import TopNavBar from './TopNavBar'
import BaseContainer from './BaseContainer'
import PageTable from './PageTable'
class App extends React.Component {
  constructor() {
    super();
  } 
  render() {
    return (
      <div className="App">
        <TopNavBar></TopNavBar>
        <BaseContainer> </BaseContainer>
        <PageTable></PageTable>
      </div>
    )
  }
}

export default App;
