import React, {Component} from 'react';


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
                    <h2>WEB DESIGN</h2>
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>JavaScript</h4>
                    <h4>ReactJS</h4>
                    <h4>Django</h4>
                    <h4>Git</h4>
                </div>
            </div>    
        );
    }
}