import React, {Component} from 'react';


export default class Skills extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h2>PERSONAL SKILLS</h2>
                    <h4>Creativity</h4>
                    <h4>Self-learning</h4>
                    <h4>Proactivity</h4>
                    <h4>Teamwork</h4>
                    <h4>Curiosity</h4>
                </div>
            </div>    
        );
    }
}