import React, {Component} from 'react';


export default class Cloud extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className={this.props.name}>
                <div>
                    <h2>CLOUD COMPUTING</h2>
                    <h4>Django</h4>
                    <h4>AWS</h4>
                    <h4>Google Cloud</h4>
                    <h4>Big Data</h4>
                    <h4>Cibersecurity</h4>
                </div>
            </div>    
        );
    }
}