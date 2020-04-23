import React, {Component} from 'react';

//Pictures
import GitHub from './img/GitHub.png';
import LinkedIn from './img/LinkedIn.png';
import Gmail from './img/Gmail.png';


export default class Presentation extends Component {
    render(){
        return(
            <div className={this.props.name}>
                <h2>SERGIO ALFARO</h2>
                <h3>Electronic & Automation Engineer</h3>
                <div className="text">
                <p>"What you think, you become.</p>
                <p>What you feel, you attract.</p>
                <p>What you imagine, you create."</p>
                </div>
                <br/>
                <hr/>
                <div className="socialMedia">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SergioAlfaroLahoz" className="GitHub"><img src={GitHub} alt="GitHub"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sergio-alfaro-lahoz-6b9a52191/" className="LinkedIn"><img src={LinkedIn} alt="LinkedIn"/></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:SergioAlfaroLahoz@gmail.com" className="Gmail"><img src={Gmail} alt="Gmail"/></a>
                </div>   
            </div>    
        );
    }
}