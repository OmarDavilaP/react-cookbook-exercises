import React, { Component } from 'react';
import './App.css';

// import TestComponent from './test-creact-book_content/Test-returnArrayWrapper';
 import ErrorBoundary from './test-creact-book_content/ErrorBoundaries';
import Home from './Home/Home';
import Chart from './react-and-c3/Chart';
import TestPopup from './popup/Test-popup';
//third party libraries
import Popup from 'react-popup';
import './popup/Popup.css';
import {connect} from 'react-redux';

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

    setTimeout(()=>{
      this.setState({test:23});
    },1000);

  }

  handleInput=({target:{value}})=>{
    console.log(value)
  }

  render() {
    console.log("props with Redux",this.props)
    return (
      <div className="App">
      <ErrorBoundary>
        <h4>{this.state.test}</h4>
        <Home data={{info:{dataTest:this.state.test},events:{input:this.handleInput}}} >iTexico</Home>
        <Chart columns={this.columns} 
        chartType={this.state.chartType} />
            <p>
              Chart Type
              <button  onClick={this.setBarChart}>Bar</button>
              <button  onClick={this.setLineChart}>Line</button>
            </p>
       <TestPopup data={{name:"Omar",last_name:"Davila"}}></TestPopup>

      </ErrorBoundary>
      <Popup/>
      </div>
      
    );
  }
}

function mapStateTopProps(state){
  console.log("state from mapToState",state)
  return{
    isMobile:state.device.isMobile
  }
}
function mapDispatchToProps(){
  return{};
}

export default connect(mapStateTopProps,mapDispatchToProps)(App);
