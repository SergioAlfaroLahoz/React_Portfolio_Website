import React, {Component} from 'react';

//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {

    constructor(args){
        super(args);
        this.onClick = this.onClick.bind(this);
        this.state = {
          window: this.props.window
        }
    }
    
    onClick(){
        var newWindow = this.state.window
        for(var w in newWindow){
            if(newWindow[w]==='circle active'){
                if(parseInt(w)===(newWindow.length-1)){
                    newWindow[0] = 'circle active'
                    this.props.changeWindow(0)
                }else{
                    var nextW = parseInt(w)+1
                    newWindow[nextW] = 'circle active'
                    this.props.changeWindow(nextW)
                }
                newWindow[w] = 'circle'
                this.setState({
                    window: newWindow
                })
                this.props.setCircle(this.state.window)
                break;
            }
        }
    }

    render(){
        return(
            <div className="icons-holder">
                <div className="arrow-holder">
                    <FontAwesomeIcon className="arrow" icon={faAngleDown} onClick={this.onClick}/>
                </div>
                
                <div className="circle-holder">
                    <FontAwesomeIcon className={this.state.window[0]} icon={faCircle}/>
                    <FontAwesomeIcon className={this.state.window[1]} icon={faCircle}/>
                    <FontAwesomeIcon className={this.state.window[2]} icon={faCircle}/>
                    <FontAwesomeIcon className={this.state.window[3]} icon={faCircle}/>
                    <FontAwesomeIcon className={this.state.window[4]} icon={faCircle}/>
                </div>

            </div>
        );
    }
}