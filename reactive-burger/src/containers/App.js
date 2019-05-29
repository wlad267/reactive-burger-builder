import React, { Component } from 'react';
import logo from '../assests/logo.svg'
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


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
    show: true
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
          <Cockpit title={this.props.title} toggleShow={this.toggleShow} persons={this.state.persons} />      
      
          {persons}       
        
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

export default App;
