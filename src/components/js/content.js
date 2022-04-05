import React, {Component} from 'react';

//Components
import Presentation from './windows/presentation';
import Firmware from './windows/firmware';
import Hardware from './windows/hardware';
import Automation from './windows/automation';
import Frontend from './windows/frontend';
import Backend from './windows/backend';
import ComputerVision from './windows/computerVision'
import Skills from './windows/skills';
import Navbar from './navbar';

import Sergio from '../img/Sergio_Without_Background_BW.png';


export default class Content extends Component {

    constructor(args){
        super(args);
        this.myRef = React.createRef();
        this.state = {
            presentation: 'presentation-holder',
            electronic: 'electronic-holder',
            fullstack: 'fullstack-holder',
            AI: 'AI-holder',
            skills: 'skills-holder',
            window: ['bar active', 'bar', 'bar', 'bar', 'bar'],
        }
    }

    changeSize(stateid, elementID, nWindow){
        var newWindow = ['bar', 'bar', 'bar', 'bar', 'bar']
        let elementHolder = document.getElementById(elementID)
        var windowHeight = document.documentElement.scrollHeight //browser window height
        var elementDistanceTop = elementHolder.getBoundingClientRect().top //distance from the top of the object to the top of the window
        // var elementDistanceBottom = elementHolder.getBoundingClientRect().bottom //distance from the bottom of the object to the top of the window
        if(elementDistanceTop<windowHeight/3){
            newWindow[nWindow] = 'bar active'
            this.setState({
                [stateid]: elementID + ' active',
                window: newWindow,
            })
        }
    }

    handleScroll = () => {
        try{
        let sergio = document.getElementById("Sergio")
        const scrollTop = this.myRef.current.scrollTop
        if(window.innerWidth < 800){
            var position = -20-(scrollTop * 0.1)
            if(position<-100) position = -100
        }else{
            var position = 3-(scrollTop * 0.1)
            if(position<-50) position = -50
        }
        sergio.style.left = position + '%'
    
        this.changeSize("presentation", "presentation-holder", 0)
        this.changeSize("electronic", "electronic-holder", 1)
        this.changeSize("fullstack", "fullstack-holder", 2)
        this.changeSize("AI", "AI-holder", 3)
        this.changeSize("skills", "skills-holder", 4)
        this.setState({
            scrollTop: scrollTop
        })
        } catch {}
    }

    render() {
        return(
            <div className="windows-content"  ref={this.myRef} onScroll={this.handleScroll}>
                <img className="Sergio" src={Sergio} alt="Sergio" id="Sergio"></img>
                <section className="navbar-holder" id="navbar-holder">
                    <Navbar name="navbar" bar={this.state.window}/>
                </section>
                <section className={this.state.presentation} id="presentation-holder">
                    <Presentation name="presentation"/>
                </section>
                <section className={this.state.electronic} id="electronic-holder">
                    <section className="text-holder-windows-left" id="firmware-holder">
                        <Firmware name="firmware"/>
                    </section>
                    <section className="text-holder-windows-right" id="hardware-holder">
                        <Hardware name="hardware"/>
                    </section>
                </section>
                <section className={this.state.fullstack} id="fullstack-holder">
                    <section className="text-holder-windows-left" id="frontend-holder">
                        <Frontend name="frontend"/>
                    </section>
                    <section className="text-holder-windows-right" id="backend-holder">
                        <Backend name="backend"/>
                    </section>
                </section>
                <section className={this.state.AI} id="AI-holder">
                    <section className="text-holder-windows-left" id="automation-holder">
                        <Automation name="automation"/>
                    </section>
                    <section className="text-holder-windows-right" id="computerVision-holder">
                        <ComputerVision name='computerVision'/>
                    </section>
                </section>
                <section className={this.state.skills} id="skills-holder">
                    <section className="text-holder-windows-left" id="skills-holder">
                        <Skills name="skills"/>
                    </section>
                </section>
            </div>
        );

    }
}