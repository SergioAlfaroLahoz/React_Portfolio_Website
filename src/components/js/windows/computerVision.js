import React, {Component} from 'react';

import artificialIntelligenceImg from '../../img/Artificial_intelligence.png'

export default class ComputerVision extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h2>COMPUTER VISION</h2>
                    <h4>Deep Learning</h4>
                    <h4>Tensorflow</h4>
                    <h4>Object Detection</h4>
                    <h4>Clasification</h4>
                    <h4>Graphic User Interfaces</h4>
                    <img src={artificialIntelligenceImg} alt="Artificial Intelligence"/>
                </div>
            </div>    
        );
    }
}