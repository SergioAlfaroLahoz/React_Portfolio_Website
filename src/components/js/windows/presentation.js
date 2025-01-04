import React, {Component} from 'react';


export default class Presentation extends Component {
    render(){
        return(
            <div className={this.props.name}>
                <h3>
                    Hello!
                </h3>
                <hr/>
                <h4>
                    I'm Sergio, an IoT, Electronics, and Automation Engineer 
                    passionate about creating smarter, connected solutions.
                    <br/>I work as Product Owner at <a className="website" target="_blank" rel="noopener noreferrer" href="https://www.bsh-group.com/">BSH</a> - <a className="website" target="_blank" rel="noopener noreferrer" href="https://www.home-connect.com/global">Home&nbsp;Connect</a>.
                </h4>
            </div>    
        );
    }
}