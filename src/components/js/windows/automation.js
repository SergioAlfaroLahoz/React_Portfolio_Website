import React, {Component} from 'react';


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
                    <h2>INDUSTRIAL AUTOMATION</h2>
                    <h4>Robotics</h4>
                    <h4>PLCs</h4>
                    <h4>Control & Systems Simulation</h4>
                    <h4>Matlab</h4>
                </div>
            </div>    
        );
    }
}