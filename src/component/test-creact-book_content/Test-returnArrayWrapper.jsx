import React,{Component} from 'react';

class TestComponent extends Component{

    render(){
         //throw new Error();
        return [
            <li key="1">Customer 1</li>,
            <li key="2">Customer 2</li>,
            <li key="3">Customer 3</li>,
            <li key="4">Customer 4</li>,
        ];
    }
}
 export default TestComponent;