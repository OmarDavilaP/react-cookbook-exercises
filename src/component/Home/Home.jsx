import React, { Component } from 'react';

  // We import our Home.css file here
  import './Home.css';

  class Home extends Component {
    constructor(props){
      super(props);
      this.state={
      }
    }

    static getDerivedStateFromProps(props,state){
      return false
    }


    render() {
      return (
        <div className="Home">
        </div>
      );
    }
  }

  export default Home;