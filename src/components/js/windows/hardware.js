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
                    <h2>HARDWARE</h2>
                    <h4>Schematic Design</h4>
                    <h4>PCB Layout</h4>
                    <h4>EMC</h4>
                    <h4>Microcontrollers</h4>
                    <h4>Raspberry Pi</h4>
                    <h4>Sensors</h4>
                    <h4>Motors</h4>
                    <img src={electronicChip} alt="Electronic chip"/>
                </div>
            </div>    
        );
    }
}