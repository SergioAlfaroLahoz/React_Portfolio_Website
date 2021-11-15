import React, {Component} from 'react';

import automationImg from '../../img/Automation.png'

export default class Automation extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h3>ARTIFICIAL INTELLIGENCE</h3>
                    <h2>INDUSTRIAL AUTOMATION</h2>
                    <h4>Control & Systems Simulation</h4>
                    <h4>Robotics</h4>
                    <h4>PLCs</h4>
                    <h4>Matlab</h4>
                    <img src={automationImg} alt="Automation"/>
                </div>
            </div>    
        );
    }
}