import React, {Component} from 'react';

import electronicChip from '../../img/pcb.png'

export default class Hardware extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h3>ELECTRONIC DEVELOPMENT</h3>
                    <h2>HARDWARE DESIGN</h2>
                    <h4>IoT</h4>
                    <h4>C++</h4>
                    <h4>Python</h4>
                    <h4>Motors</h4>
                    <h4>Sensors</h4>
                    <h4>Hardware Design</h4>
                    <img src={electronicChip} alt="Electronic chip"/>
                </div>
            </div>    
        );
    }
}