import  React, {Component} from 'react';
import Popup from 'react-popup';

class TestPopup extends Component{

    constructor(props){
        super(props);
    
        this.handlePopup=this.handlePopup.bind(this);
    }

    handlePopup(){
        Popup.create({
            title:'Popup title',
            content:(
                <div>
                <p>{this.props.data.name}</p>
                <p>{this.props.data.last_name}</p>
                </div>
            ),
            buttons:{
                right:[{
                    text:'Close',
                    action:popup=>popup.close()
                }],
            },
        });
    }

    render(){
        return [
            <button key="1" onClick={this.handlePopup}>Popup</button>,
        ];
    }
}

export default TestPopup;