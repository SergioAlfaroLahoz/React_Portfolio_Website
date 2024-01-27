import React, {Component} from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./components/json/particles.json";

//Styles
import './components/css/App/App.css'; 
import './components/css/Responsive/responsive.css';

//Components
import Content from './components/js/content';
import SocialMedia from './components/js/socialMedia';
import About from './components/js/about';

//Pictures
import Brain from './components/img/Brain_01.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.state = {
            init:false,
            home: 'Home',
            presentation: 'presentation active',
            socialMedia: 'socialMedia-holder active2',
        }
    }

    componentDidMount() {
        const { init } = this.state;

        if (init) {
            return;
        }

        this.initParticlesEngine()
            .then(() => {
            this.setState({ init: true });
            });
    }

    initParticlesEngine = async () => {
        await initParticlesEngine(async (engine) => {
            await loadFull(engine);
        });
    };

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
        const { init } = this.state;

        return (
            <HashRouter basename="/">
        
                <div className="App">

                <div className="Particles">
                    {init && <Particles options={particlesOptions} />}
                </div>
        
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
        
                    <Routes>
                        <Route exact path="/" element={<Content/>}></Route>
        
                        <Route path="/About" element={<About/>}></Route>
                    </Routes>
        
                </div>
        
                </div>
        
            </HashRouter>
        ); 
    }
}

export default App;