
import React,{Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render(){
        return(
            <div id = "main">
                    <div> You Completed the Registration Form </div>
                    <div> Your registered now </div>
                    
            </div>
        )
    }
}
export default Form;

