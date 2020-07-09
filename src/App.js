import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting'


import {
  BrowserRouter as Router,

  Route
} from "react-router-dom";
import Home from './components/Home'
import NavBar from './components/navBar';
import Todoui from './components/Todoui';
import About from './components/About';
import Enquire from './components/Enquire'

class App extends Component {
  constructor(props) { 
       super(props);
        this.state = {    
        show: false    }; 
   }
    render() {    // use Todo component inside render method. 
         return (     
          <Router> 
                         
                     <div className="App">
                         <div className="Ap-logo">
                              OTITO's TODO lists
                         </div>

                         <div className="body">
                                   <Greeting/>
                                   <NavBar/>
                                   <switch>

                                             <Route exact path="/" component={Home}/>
                                             <Route path="/Enquire" component={Enquire}/>
                                             <Route path="/About" component={About}/>
                                             <Route  path="/Todoui" component={Todoui}/>
                                   </switch>
                                  
                              </div>
                    </div>
                  
         
          </Router>
         );  
     }
}







export default App;
