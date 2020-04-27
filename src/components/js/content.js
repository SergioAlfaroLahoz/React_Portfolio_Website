import React, {Component} from 'react';

//Components
import Presentation from './windows/presentation';
import Electronic from './windows/electronic';
import Automation from './windows/automation';
import WebDesign from './windows/webDesign';
import Skills from './windows/skills';


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