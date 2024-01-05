import React, {Component} from 'react';

//Pictures
import GitHub from '../img/Github.png';
import Arrow from '../img/Arrow_down.png';

export default class About extends Component {
    render(){
        return(
            <div className="about-holder">
                <h1>This website has been created with ReactJS</h1>
                <h1>Find the code here!</h1>
                <br/>
                <img src={Arrow} alt="arrowDown" className='arrowDown'/>
                <br/><br/>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SergioAlfaroLahoz/React_Portfolio_Website/tree/New-Design" className="GitHub"><img src={GitHub} alt="GitHub"/></a>
            </div>    
        );
    }
}