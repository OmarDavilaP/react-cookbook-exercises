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

    shouldComponentUpdate(props,state){ //avoid to render everyTime
        //console.log("props shouldCompUp",props)
        return true;
    }

    componentWillUnmount(){ // can be activaded only when de component wilbe removed from DOM
      //console.log("Component unmounted..")
    }

    componentDidUpdate(prevProps){ // component will executed when the component already was updated
      //console.log("componentDidUpdate",prevProps);
    }


    render() {
      const {data:{events:{input}}} = this.props;
      return (
        <input type="text" onChange={input}/>
      )
    }
  }

  export default Home;