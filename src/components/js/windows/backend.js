import React, {Component} from 'react';

import backendImg from '../../img/Backend.png'


export default class WebDesign extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h3>FULL-STACK</h3>
                    <h2>BACK-END</h2>
                    <h4>Big Data</h4>
                    <h4>Cybersecurity</h4>
                    <h4>Django</h4>
                    <h4>Flask</h4>
                    <h4>AWS</h4>
                    <h4>Microsoft Azure</h4>
                    <h4>Google Cloud</h4>
                    <img src={backendImg} alt="Backend"/>
                </div>
            </div>    
        );
    }
}