import React, {Component} from 'react';

//Pictures
import GitHub from '../img/GitHub_blue.png';
import LinkedIn from '../img/LinkedIn_blue.png';
import Gmail from '../img/Gmail_blue.png';


export default class socialMedia extends Component {
    render(){
        return(
            <div className={this.props.socialMedia}>
                <div className="socialMedia">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/SergioAlfaroLahoz" className="GitHub"><img src={GitHub} alt="GitHub"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sergio-alfaro-lahoz-6b9a52191/" className="LinkedIn"><img src={LinkedIn} alt="LinkedIn"/></a>
                <a target="_blank" rel="noopener noreferrer" href="mailto:SergioAlfaroLahoz@gmail.com" className="Gmail"><img src={Gmail} alt="Gmail"/></a>
                </div>   
            </div>    
        );
    }
}