import React, {Component} from 'react';

//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

//Pictures
import GitHub from '../img/GitHub_blue.png';

export default class About extends Component {
    render(){
        return(
            <div className="about-holder">
                <h1>This website has been created with ReactJS</h1>
                <h1>Find the code here!</h1>
                <br/>
                <FontAwesomeIcon className='arrowDown' icon={faArrowDown}/>
                <br/><br/>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SergioAlfaroLahoz/React_Portfolio_Website/tree/New-Design" className="GitHub"><img src={GitHub} alt="GitHub"/></a>
            </div>    
        );
    }
}