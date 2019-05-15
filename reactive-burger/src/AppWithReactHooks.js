import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [personState, setPersonsState] = useState( 
      {
         persons: [{name: 'Gelu', age: 22}, 
                  {name: 'Gogu', age:44}]
      }
    );

    const [otherState, setOthersState] = useState('this is the other state');

    const changeTheStateHandler = (newName) => {
      console.log('click, current state '+ JSON.stringify(personState) + otherState);
      setPersonsState({
        persons: [
          {name: newName, age: 22}, 
          {name: 'Gogu2', age:44}]
      });
    }

    const [show, setShowState] = useState({show: true});

    const changeFirstNameHandler = (event) => {
      console.log('click, current state '+ JSON.stringify(personState) + otherState);
      setPersonsState({
        persons: [
          {name: event.target.value, age: 22}, 
          {name: 'Gogu2', age:44}]
      });
    }
  
    const toggleShow = () => {
     console.log('toggle the show');
     setShowState(!show);
    }

    let persons = null;
    if (show) {
      persons = (
        <div>
        <Person 
            name={personState.persons[0].name} 
            age={personState.persons[0].age}
            click={changeTheStateHandler.bind(this, "new name form the paragraph")}
            changed={changeFirstNameHandler}>
          Hobies: racing
        </Person>
    
        <Person 
          name={personState.persons[1].name} 
          age={personState.persons[1].age}
          click={changeTheStateHandler}
          changed={changeFirstNameHandler}
          >
        </Person>
        </div>
      );
    }

    return (
    <div className="App">
      <button className="IlButtone" onClick={toggleShow}>switch my personality</button>
     
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
  );
}

export default App;


