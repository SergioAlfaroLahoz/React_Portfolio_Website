import React, {Component} from 'react'; 
import './components/css/App/App.css'; 

//Components
import Particlesc from './components/particlesc'; 
import Start from './components/start'; 
import Content from './components/content';
import Navbar from './components/navbar';

//Pictures
import Brain from './components/img/Brain.png';
import Sergio from './components/img/Sergio_Without_Background.png';

class App extends Component { 

  constructor(args){
    super(args);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.changeWindow = this.changeWindow.bind(this);
    this.state = {
      home: 'Home',
      windowActive: 0,
      presentation: 'presentation active',
      electronic: 'electronic',
      automation: 'automation',
      webDesign: 'webDesign',
      skills: 'skills'
    }
  }

  changeWindow(w){
    this.setState({
      windowActive: w
    })
    if(w===0){
      this.setState({
        presentation: 'presentation active',
        skills: 'skills'
      })
    }else if(w===1){
      this.setState({
        presentation: 'presentation',
        electronic: 'electronic active'
      })
    }else if(w===2){
      this.setState({
        electronic: 'electronic',
        automation: 'automation active'
      })
    }else if(w===3){
      this.setState({
        automation: 'automation',
        webDesign: 'webDesign active'
      })
    }else if(w===4){
      this.setState({
        webDesign: 'webDesign',
        skills: 'skills active'
      })
    }
  }

  onClick1(){
    this.setState({
      home: 'Home active'
    })
  }

  onClick2(){
    this.setState({
      home: 'Home'
    })
  }

  render() {
    return (  
      <div className="App">

        <div className="Start">
          <Start/>
        </div>

        <div className={this.state.home}>
          <Particlesc/>
          <p className='home-button1' onClick={this.onClick1}>
            <img src={Brain} alt="Brain"></img>
          </p>

          <p className='home-button2' onClick={this.onClick2}>
            <img src={Brain} alt="Brain"></img>
          </p>

          <img className="Sergio" src={Sergio} alt="Sergio"></img>
          <div className="text-holder">
            <div className="slide active">
              <Content windowActive={this.state.windowActive} presentation={this.state.presentation} electronic={this.state.electronic} automation={this.state.automation} webDesign={this.state.webDesign} skills={this.state.skills}/>
            </div>
            <div className="navbar">
              <Navbar changeWindow={this.changeWindow}/>
            </div>
          </div>
        </div>

      </div>
    ); 
  }
} 

export default App; 
