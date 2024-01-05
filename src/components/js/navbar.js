import React, {Component} from 'react';

export default class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <hr className={this.props.bar[0]}/>
                <hr className={this.props.bar[1]}/>
                {/* <hr className={this.props.bar[2]}/>
                <hr className={this.props.bar[3]}/>
                <hr className={this.props.bar[4]}/> */}
            </div>
        );
    }
}