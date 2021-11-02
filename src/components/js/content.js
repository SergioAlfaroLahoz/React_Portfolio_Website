import React, {Component} from 'react';

//Components
import Presentation from './windows/presentation';
import Firmware from './windows/firmware';
import Hardware from './windows/hardware';
import Automation from './windows/automation';
import Frontend from './windows/frontend';
import Backend from './windows/backend';
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
                <div className="text-holder" id="presentation-holder">
                    <Presentation name={this.props.presentation}/>
                </div>
                <div className="windows-content">
                    <div className="text-holder-windows" id="firmware-holder">
                        <Firmware name={this.props.firmware}/>
                    </div>
                    <div className="text-holder-windows" id="hardware-holder">
                        <Hardware name={this.props.hardware}/>
                    </div>
                    <div className="text-holder-windows" id="backend-holder">
                        <Backend name={this.props.backend}/>
                    </div>
                    <div className="text-holder-windows" id="frontend-holder">
                        <Frontend name={this.props.frontend}/>
                    </div>
                    <div className="text-holder-windows" id="automation-holder">
                        <Automation name={this.props.automation}/>
                    </div>
                    <div className="text-holder-windows" id="skills-holder">
                        <Skills name={this.props.skills}/>
                    </div>
                </div>
            </div>
        );

    }
}