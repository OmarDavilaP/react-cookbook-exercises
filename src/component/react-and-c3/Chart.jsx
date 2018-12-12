import React, { Component } from 'react';
//third party libraries
import './Chart.css';
import c3 from 'c3';

class Chart extends Component{

    componentDidMount() {
        // When the component mounts the first time we update  
        // the chart.
        this.updateChart();
      }
  
      componentDidUpdate(prevProps) {
          console.log('prevProps',prevProps.chartType+" --> "+this.props.chartType);
        // When we receive a new prop then we update the chart again.
        this.updateChart();
      }
  
      updateChart() {
        c3.generate({
          bindto: '#chart',
          data: {
            columns: this.props.columns,
            type: this.props.chartType
          }
        });
      }

    render(){
        return <div id="chart"/>;
    }

}

export default Chart;