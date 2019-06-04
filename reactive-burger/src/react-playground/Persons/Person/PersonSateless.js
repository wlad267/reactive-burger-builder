import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    console.log('person js render');
    const style ={
        color: 'red',
        backgroundColor: 'blue'
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>This is a {props.name}, {props.age} age, {Math.random()*30}</p>
            <p>Child: {props.children}</p>
            <button style={style}>Personal Act</button>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>    
    );
}

export default Person;