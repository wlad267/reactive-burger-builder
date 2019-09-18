import React, { Component } from 'react';
import cssClasses from './App.css';
import Layout from '../components/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import axios from 'axios';
import Checkout from '../components/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';
import Orders from '../components/Orders/Orders';

class App extends Component {

  constructor(props) {
    super();
    console.log('app js constr -- calling the backend');

    axios.get('/users').then(response => {
      console.log('received ' + JSON.stringify(response));
    });

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
          <Switch>
            <Route path="/" 
                  exact         
                  component={BurgerBuilder} />
            <Route path="/checkout"  
                  component={Checkout} />
            <Route path="/orders"
                  component={Orders} />
          </Switch>
        </Layout>
      </div>

    );
  }
}

export default App
