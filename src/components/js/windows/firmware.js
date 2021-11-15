import React, {Component} from 'react';

import firmwareImg from '../../img/Firmware.png'

export default class Firmware extends Component {

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
                    <h2>FIRMWARE</h2>
                    <h4>C++</h4>
                    <h4>Python</h4>
                    <h4>Big Data</h4>
                    <h4>Cybersecurity</h4>
                    <h4>Git</h4>
                    <h4>Wi-Fi</h4>
                    <h4>Bluetooth</h4>
                    <img src={firmwareImg} alt="Firmware"/>
                </div>
            </div>    
        );
    }
}