import React, { Component } from 'react';
import cssClasses from './App.css';
import Layout from '../components/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super();
    console.log('app js constr -- calling the backend');
    axios.get('/users').then(response => {
      console.log('received ' + JSON.stringify(response));
    })
    const user = {
        id: Math.random() * 1000,
        firstName: "Random User",
        lastName: "Random User",
        email: "Random User@microsoft.com"
    }
    axios.post('/users', user);
  }


    render = () => {
      console.log('app js render');
 
      return (         
        <div className={cssClasses.App}>
          <Layout>
            <BurgerBuilder />
           </Layout>  
        </div>
  
  );
    }
}

export default App
