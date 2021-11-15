import React, {Component} from 'react';

import frontEndImg from '../../img/Frontend.png'


export default class WebDesign extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <h3>FULL-STACK WEB DEVELOPMENT</h3>
                <h2>FRONT-END</h2>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>JavaScript</h4>
                <h4>ReactJS</h4>
                <img src={frontEndImg} alt="Frontend"/>
            </div>    
        );
    }
}