import React, {Component} from 'react';


export default class Electronic extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h2>ELECTRONIC DEVELOPMENT</h2>
                    <h4>IoT</h4>
                    <h4>C++</h4>
                    <h4>Python</h4>
                    <h4>Motors</h4>
                    <h4>Sensors</h4>
                    <h4>Hardware Design</h4>
                </div>
            </div>    
        );
    }
}