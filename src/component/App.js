import React, { Component } from 'react';
import './App.css';

// import TestComponent from './test-creact-book_content/Test-returnArrayWrapper';
 import ErrorBoundary from './test-creact-book_content/ErrorBoundaries';
import Home from './Home/Home';
import Chart from './react-and-c3/Chart';
import Animation from './animation-fade/Animation';
import TestPopup from './popup/Test-popup';
//third party libraries
import Popup from 'react-popup';
import './popup/Popup.css';
class App extends Component {

  constructor(props){
    super(props);

    this.state={
      test:0,
      chartType:'line'
    }

    this.columns = [
      ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
      ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
      ['XRP', 100, 200, 300, 500, 400, 300],
    ];
      
  }

  setBarChart = () => {
    this.setState({
      chartType: 'bar'
    });
  }

  setLineChart = () => {
    this.setState({
      chartType: 'line'
    });
  }

  componentDidMount=()=>{

    // setTimeout(()=>{
    //   this.setState({test:23});
    // },1000);

    

  }


  render() {
    return (
      <div className="App">
      <ErrorBoundary>
        <h4>{this.state.test}</h4>
        <Home data={this.state.test}>iTexico</Home>
        <Chart columns={this.columns} 
        chartType={this.state.chartType} />
            <p>
              Chart Type
              <button onClick={this.setBarChart}>Bar</button>
              <button onClick={this.setLineChart}>Line</button>
            </p>
       <Animation/>
       <TestPopup data={{name:"Omar",last_name:"Davila"}}></TestPopup>
      </ErrorBoundary>
      <Popup/>
      </div>
      
    );
  }
}

export default App;
