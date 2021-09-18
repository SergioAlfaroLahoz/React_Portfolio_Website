import React, {Component} from 'react'; 
import {HashRouter, Switch, Route, Link} from 'react-router-dom'; 

//Styles
import './components/css/App/App.css'; 
import './components/css/Responsive/responsive.css';

//Components
import Particlesc from './components/js/particlesc'; 
import Start from './components/js/start'; 
import Content from './components/js/content';
import SocialMedia from './components/js/socialMedia';
import Navbar from './components/js/navbar';
import About from './components/js/about';

//Pictures
import Brain from './components/img/Brain.png';
import Sergio from './components/img/Sergio_Without_Background.png';

class App extends Component { 

  constructor(args){
    super(args);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.setCircle = this.setCircle.bind(this);
    this.changeWindow = this.changeWindow.bind(this);
    this.myRef = React.createRef();
    this.state = {
      home: 'Home',
      windowActive: 0,
      presentation: 'presentation active',
      socialMedia: 'socialMedia-holder active2',
      electronic: 'electronic active',
      automation: 'automation',
      webDesign: 'webDesign',
      skills: 'skills',
      window: ['circle active', 'circle', 'circle', 'circle', 'circle'],
      scrollTop: 0
    }
  }

  changeWindow(w){
    this.setState({
      windowActive: w
    })
    if(w===0){
      this.setState({
        presentation: 'presentation active',
        socialMedia: 'socialMedia-holder active1 active2',
        skills: 'skills'
      })
    }else if(w===1){
      this.setState({
        presentation: 'presentation',
        socialMedia: 'socialMedia-holder active1',
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

  setCircle(w){
    this.setState({
      window: w
    })
  }

  onClick1(){
    if(this.state.presentation==='presentation active'){
      this.setState({
        home: 'Home active',
        socialMedia: 'socialMedia-holder active1 active2'
      })
    }else{
      this.setState({
        home: 'Home active',
        socialMedia: 'socialMedia-holder active1'
      })
    }
  }

  onClick2(){
    this.setState({
      home: 'Home',
      socialMedia: 'socialMedia-holder'
    })
  }

  handleScroll = () => {
    const scrollY = window.scrollY
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })
  }

  render() {
    const {
      scrollTop
    } = this.state
    return (
      <HashRouter basename="/">

        <div className="App">

          <div className="Start">
            <Start/>
          </div>

          <div className={this.state.home} ref={this.myRef} onScroll={this.handleScroll}>

            <Particlesc id="particles"/>

            <p className='home-button1' onClick={this.onClick1}>
              <img src={Brain} alt="Brain"></img>
            </p>

            <p className='home-button2' onClick={this.onClick2}>
              <img src={Brain} alt="Brain"></img>
            </p>

            <Switch>

              <Route exact path="/">
                <Link to="/About"><h2 className='About'>About</h2></Link>
                <img className="Sergio" src={Sergio} alt="Sergio"></img>
                <Content windowActive={this.state.windowActive} presentation={this.state.presentation} electronic={this.state.electronic} automation={this.state.automation} webDesign={this.state.webDesign} skills={this.state.skills}/>
                <SocialMedia socialMedia={this.state.socialMedia}/>
              </Route>

              <Route path="/About">
                <Link to="/"><h2 className='Back'>Back</h2></Link>
                <About/>
              </Route>

            </Switch>

          </div>

        </div>

      </HashRouter>
    ); 
  }
} 

export default App; 
