import React,{Component} from 'react';
import './App.css';
import Logo from './logo/logo';
import SearchBar from './search bar/SearchBar';
import Particles from 'react-particles-js';
import CelebrityDetection from './CelebrityDetection/CelebrityDetection';
import Clarifai from 'clarifai';

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'd12b593eefc94db2bfe8a5288fecf7d7'
 });


class App extends Component {
 
   constructor()
   {
     super();
     this.state=
     {
       input:'',
       imgURL:'',
       CelebrityName:''
     }
   }

  predictCelebrity=(data)=>
  {
       const celebName=data.outputs[0].data.regions[0].data.concepts[0].name;
       this.setState({CelebrityName:celebName});
  }
  onInput=(event)=>
  {
    this.setState({input: event.target.value });
  }
  onSubmit=()=>
  {

    this.setState({imgURL:this.state.input});
     app.models.predict(Clarifai.CELEBRITY_MODEL,this.state.input)
     .then(response=>this.predictCelebrity(response));
      
  }
  render() { 
    return ( <div>
      <Particles className='particles' params={particlesOptions}/>
      <Logo/>
      <h1  className='white f1'>Celebrity Detector</h1>
      <SearchBar onInput={this.onInput} onSubmit={this.onSubmit}/>
    <h1 className='white f2'>{`${this.state.CelebrityName}`}</h1>
      <CelebrityDetection imgURL={this.state.imgURL}/>
      </div> );
  }
}
 
export default App;