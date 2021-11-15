import React, {Component} from 'react';


export default class Presentation extends Component {
    render(){
        return(
            <div className={this.props.name}>
                <h3>
                    Hello! I'm Sergio Alfaro, an IoT Engineer specialized on connected product development.
                    Passionate about digital & data transformation, with a curious mind opened to new technologies.
                    Scroll down to find out more about my skills.
                </h3>
            </div>    
        );
    }
}