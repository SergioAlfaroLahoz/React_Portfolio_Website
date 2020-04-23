import React, {Component} from 'react';

//Components
import Presentation from './presentation';
import Electronic from './electronic';
import Automation from './automation';
import WebDesign from './webDesign';
import Skills from './skills';


export default class Content extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Presentation name={this.props.presentation}/>
                <Electronic name={this.props.electronic}/>
                <Automation name={this.props.automation}/>
                <WebDesign name={this.props.webDesign}/>
                <Skills name={this.props.skills}/>
            </div>
        );

    }
}