import React, {Component} from 'react';


export default class Presentation extends Component {
    render(){
        return(
            <div className={this.props.name}>
                <h3>
                    I'm Sergio - 
                </h3>
                <h4>
                    IoT, Electronic & Automation Engineer 
                </h4>
                <h5>
                    Working as Product Owner at <a className="website" target="_blank" rel="noopener noreferrer" href="https://www.bsh-group.com/">BSH</a> - <a className="website" target="_blank" rel="noopener noreferrer" href="https://www.home-connect.com/global">Home Connect</a>
                </h5>
            </div>    
        );
    }
}