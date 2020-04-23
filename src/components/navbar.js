import React, {Component} from 'react';

//Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { unstable_batchedUpdates } from 'react-dom';

export default class Navbar extends Component {

    constructor(args){
        super(args);
        this.onClick = this.onClick.bind(this);
        this.state = {
          window: ['circle active', 'circle', 'circle', 'circle', 'circle']
        }
    }
    
    onClick(){
        for(var w in this.state.window){
            if(this.state.window[w]==='circle active'){
                if(parseInt(w)===(this.state.window.length-1)){
                    this.state.window[0] = 'circle active'
                    this.props.changeWindow(0)
                }else{
                    var nextW = parseInt(w)+1
                    this.state.window[nextW] = 'circle active'
                    this.props.changeWindow(nextW)
                }
                this.state.window[w] = 'circle'
                this.setState({ })
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