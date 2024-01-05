import React, {Component} from 'react'; 
import {HashRouter, Switch, Route, Link} from 'react-router-dom'; 

//Styles
import './components/css/App/App.css'; 
import './components/css/Responsive/responsive.css';

//Components
import Particlesc from './components/js/particlesc'; 
import Content from './components/js/content';
import SocialMedia from './components/js/socialMedia';
import About from './components/js/about';

//Pictures
import Brain from './components/img/Brain_01.png';

class App extends Component { 

  constructor(args){
    super(args);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.state = {
      home: 'Home',
      presentation: 'presentation active',
      socialMedia: 'socialMedia-holder active2',
    }
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

  render() {
    return (
      <HashRouter basename="/">

        <div className="App">

          <Particlesc id="particles"/>

          <div className="Start">
            <SocialMedia socialMedia={this.state.socialMedia}/>
          </div>

          <div className={this.state.home}>

            <p className='home-button1' onClick={this.onClick1}>
              <img src={Brain} alt="Brain"></img>
            </p>

            <p className='home-button2' onClick={this.onClick2}>
              <img src={Brain} alt="Brain"></img>
            </p>

            <Switch>

              <Route exact path="/">
                  <Link to="/About"><h2 className='About'>About</h2></Link>
                  <Content/>
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
