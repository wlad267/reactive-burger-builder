import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  
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
    
    let persons = null;
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      ':hover': {
        backgroundColor: 'black',
        color: 'gray'
      }
    };

    const classes = [];

    if (this.state.persons.length===1){
      classes.push('red');
      classes.push('bold');
    }
    
    if (this.state.show) {
      
     buttonStyle.backgroundColor ='red';
     
      persons = (
        <div>          
          {this.state.persons.map((person, index) => {
              return <Person name={person.name} 
                            age={person.age} 
                            click={() => this.deletePersonHandler(index)} 
                            changed={(event) => this.changeNameHandler(event, person.id)} 
                            key={person.id} />
                          })}
        </div>
      );
    }

    return (
      <StyleRoot>
    <div className="App">

      <p className={classes.join(' ')}>Helllo Motto!</p>

      <button 
        className=""
        style={buttonStyle}       
        onClick={this.toggleShow}>switch my personality</button>
     
       {persons}
     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          do React
        </a>
      </header>
    </div>
    </StyleRoot>
  );
}
}

export default Radium(App);
