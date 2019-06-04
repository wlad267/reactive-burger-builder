import React, { Component } from 'react';
import cssClasses from './App.css';
import Layout from '../components/Layout/Layout'
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';


class App extends Component {

  constructor(props){
    super();
    console.log('app js constr');
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
