import './App.css';

import React, { Component } from 'react'
import Navbar from './COMPONENTS/Navbar';
// import Newsitem from './COMPONENTS/Newsitem';
import News from './COMPONENTS/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {

  state={
    progress:10
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (

      <div>
<Router>
<LoadingBar
height={3}      
color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
<Navbar/>
<Switch>
          <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={6} category="general" country="in"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={6} category="business" country="in"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={6} category="entertainment" country="in"/></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={6} category="general" country="in"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={6} category="health" country="in"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={6} category="science" country="in"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={6} category="sports" country="in"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={6} category="technology" country="in"/></Route>
        
        </Switch>
</Router>
      </div>

    )
  }
}
