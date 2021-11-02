import React, {Component} from 'react'; 
import {HashRouter, Switch, Route, Link} from 'react-router-dom'; 

//Styles
import './components/css/App/App.css'; 
import './components/css/Responsive/responsive.css';

//Components
import Particlesc from './components/js/particlesc'; 
// import Start from './components/js/start'; 
import Content from './components/js/content';
import SocialMedia from './components/js/socialMedia';
import Navbar from './components/js/navbar';
import About from './components/js/about';

//Pictures
import Brain from './components/img/Brain_blue.png';
import Sergio from './components/img/Sergio_Without_Background_BW.png';

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
      firmware: 'firmware active',
      hardware: 'hardware active',
      automation: 'automation',
      frontend: 'frontend',
      backend: 'backend active',
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
        hardware: 'hardware active'
      })
    }else if(w===2){
      this.setState({
        hardware: 'hardware',
        automation: 'automation active'
      })
    }else if(w===3){
      this.setState({
        automation: 'automation',
        frontend: 'frontend active'
      })
    }else if(w===4){
      this.setState({
        frontend: 'frontend',
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

  changeSize(elementID){
    let elementHolder = document.getElementById(elementID)
    var windowHeight = document.documentElement.scrollHeight //alto de la ventana del navegador
    var elementDistanceTop = elementHolder.getBoundingClientRect().top //distancia de la parte alta del elemento al top del navegador
    var elementDistanceBottom = elementHolder.getBoundingClientRect().bottom //distancia de la parte baja del elemento al top del navegador
    var holderWidth = 0
    var opacity = 0
    if (elementDistanceTop<windowHeight){
      if(elementDistanceTop>(windowHeight/2)){ 
        holderWidth = ((windowHeight-elementDistanceTop)/(windowHeight/2))*100 
      }else{
        if(elementDistanceBottom<(windowHeight/2)){
          holderWidth = ((elementDistanceBottom)/(windowHeight/2))*100
        }else{
          holderWidth = 70
        }
      }
    }
    opacity = holderWidth
    if (holderWidth>=70){
      holderWidth = 70
      opacity = 100
      this.setState({
        hardware: 'hardware active',
      })
    }
    // elementHolder.style.width = holderWidth + '%'
    // elementHolder.style.opacity = opacity + '%'
  }

  handleScroll = () => {
    try{
      let sergio = document.getElementById("Sergio")
      const scrollTop = this.myRef.current.scrollTop
      sergio.style.left = 6-(scrollTop * 0.1) + '%'
  
      this.changeSize("hardware-holder")
      this.changeSize("automation-holder")
      this.changeSize("frontend-holder")
      this.changeSize("skills-holder")
      this.setState({
        scrollTop: scrollTop
      })
    } catch {}
  }

  render() {
    const {
      scrollTop
    } = this.state
    return (
      <HashRouter basename="/">

        <div className="App">

          <Particlesc id="particles"/>

          <div className="Start">
            <div className="Start2">
              <h1>SERGIO ALFARO</h1>
            </div>
            <SocialMedia socialMedia={this.state.socialMedia}/>
          </div>

          <div className={this.state.home} ref={this.myRef} onScroll={this.handleScroll}>

            {/* <div></div> */}

            <p className='home-button1' onClick={this.onClick1}>
              <img src={Brain} alt="Brain"></img>
            </p>

            <p className='home-button2' onClick={this.onClick2}>
              <img src={Brain} alt="Brain"></img>
            </p>

            <Switch>

              <Route exact path="/">
                <img className="Sergio" src={Sergio} alt="Sergio" id="Sergio"></img>
                <Link to="/About"><h2 className='About'>About</h2></Link>
                <Content windowActive={this.state.windowActive} presentation={this.state.presentation} firmware={this.state.firmware} hardware={this.state.hardware} automation={this.state.automation} backend={this.state.backend} frontend={this.state.frontend} skills={this.state.skills}/>
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
