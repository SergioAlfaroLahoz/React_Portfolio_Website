import React, {Component} from 'react';


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
            </div>    
        );
    }
}