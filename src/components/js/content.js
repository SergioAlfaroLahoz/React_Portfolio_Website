import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Components
import Presentation from './windows/presentation';
import Description from './windows/description';
import Navbar from './navbar';

import Sergio from '../img/Sergio_Without_Background_BW.png';


export default class Content extends Component {

    constructor(args){
        super(args);
        this.myRef = React.createRef();
        this.state = {
            presentation: 'presentation-holder',
            description: 'description-holder',
            window: ['bar active', 'bar'],
        }
    }

    changeSize(stateid, elementID, nWindow){
        var newWindow = ['bar', 'bar']
        let elementHolder = document.getElementById(elementID)
        var windowHeight = document.documentElement.scrollHeight //browser window height
        var elementDistanceTop = elementHolder.getBoundingClientRect().top //distance from the top of the object to the top of the window
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
            position = 3-(scrollTop * 0.1)
            if(position<-50) position = -50
        }
        sergio.style.left = position + '%'
    
        this.changeSize("presentation", "presentation-holder", 0)
        this.changeSize("description", "description-holder", 1)
        this.setState({
            scrollTop: scrollTop
        })
        } catch {}
    }

    render() {
        return(
            <div className="windows-content"  ref={this.myRef} onScroll={this.handleScroll}>
                <Link to="/About"><h2 className='About'>About</h2></Link>
                <img className="Sergio" src={Sergio} alt="Sergio" id="Sergio"></img>
                <section className="navbar-holder" id="navbar-holder">
                    <Navbar name="navbar" bar={this.state.window}/>
                </section>
                <section className={this.state.presentation} id="presentation-holder">
                    <Presentation name="presentation"/>
                </section>
                <section className={this.state.description} id="description-holder">
                    <Description name="description"/>
                </section>
            </div>
        );

    }
}