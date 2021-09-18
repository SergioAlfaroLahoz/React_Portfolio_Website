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
                <div className="text-holder">
                    <Presentation name={this.props.presentation}/>
                </div>
                <div className="text-holder-windows">
                    <Electronic name={this.props.electronic}/>
                </div>
                <div className="text-holder-windows">
                    <Automation name={this.props.automation}/>
                </div>
                <div className="text-holder-windows">
                    <WebDesign name={this.props.webDesign}/>
                </div>
                <div className="text-holder-windows">
                    <Skills name={this.props.skills}/>
                </div>
            </div>
        );

    }
}