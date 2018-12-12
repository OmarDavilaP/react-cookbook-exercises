import React,{Component} from 'react';

class ErrorBoundary extends Component{


    constructor(props){
        super(props);
        this.state = { error: null, errorInfo: null };

    }

    componentDidCatch(error,info){
        // Display fallback UI
        this.setState({error:error,errorInfo:info});        
    }
    
    render(){
        console.log(this.state)
        if (this.state.errorInfo) return <h1>Something went wrong</h1>
            return this.props.children; //return props to children, meaning between open and closed tags

    }

}

export default ErrorBoundary;