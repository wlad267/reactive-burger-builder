import React, { Component } from 'react';
import logo from '../assests/logo.svg'
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../components/hoc/withClass';
import AuthContex from '../context/context';

class App extends Component {

  constructor(props){
    super();
    console.log('app js constr');
  }
  
  static getDerivedStateFromProps(props, state){
    console.log(' app js getDerivedSteteFromProps ' + JSON.stringify(props));
    return state;
  }

  componentWillMount(){
    console.log('app js console will mount');
  }

  state = {
    persons: [{id: 1, name: 'Gelu', age: 22}, 
              {id:2, name: 'Gogu', age:44}],
    otherState: 'other state',
    show: true,
    authentication: false
  }
  
  changeTheStateHandler = (newName) => {
      console.log('click, current state '+ JSON.stringify(this.state.persons) + this.state.otherState);
      this.setState({
        persons: [
          {name: newName, age: 22}, 
          {name: 'Gogu2', age:44}]
      });
    }

    changeNameHandler = (event, personId) => {
      const persons =[...this.state.persons];      
      const person = this.state.persons.find(person => person.id === personId);
      console.log(person);
      person.name= event.target.value;   
      this.setState({persons: persons});
      console.log(person);
    }

    changeFirstNameHandler = (event) => {
      console.log('click, current state '+ JSON.stringify(this.state.persons) + this.state.otherState);
      this.setState({
        persons: [
          {name: event.target.value, age: 22}, 
          {name: 'Gogu2', age:44}]
      });
    }

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }
  
    toggleShow = () => {
     console.log('toggle the show');
     this.setState({show: !this.state.show});
    }

    authenticationHandler = () => {
      console.log('login handler');
      this.setState({authentication: true});
    }

    render = () => {
      console.log('app js render');
      let persons = null;

      if (this.state.show){
        persons = <Persons persons={this.state.persons}
                            clicked={this.deletePersonHandler}
                            changed={this.changeNameHandler}/> 
      }
      return (         
        <div className={cssClasses.App}>
        <AuthContex.Provider value={
                {authenticated: this.state.authenticated,
                login: this.authenticationHandler}}>
          <Cockpit title={this.props.title} toggleShow={this.toggleShow} persons={this.state.persons} />      
      
          {persons}       
        
        </AuthContex.Provider>

          <header className={cssClasses.Appheader}>
            <img src={logo} className={cssClasses.Applogo} alt="logo" />
            <p>React on the go.</p>
            <a className={cssClasses.Applink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              go to official react
            </a>
          </header>

        </div>
  
  );
    }
}

export default withClass(App, cssClasses.App);
