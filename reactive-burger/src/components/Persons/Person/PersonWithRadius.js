import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {

    const style ={
        color: 'red',
        backgroundColor: 'blue'
    }

    const peronaStyle = {
        '@media (min-width: 500px)' :{
            width: '450px'
        },
        boxShadow: '30px'
    }

    return (
        <div className='Person' style={peronaStyle}>
            <p onClick={props.click}>This is a {props.name}, {props.age} age, {Math.random()*30}</p>
            <p>Child: {props.children}</p>
            <button style={style}>Personal Act</button>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>    
    );
}

export default Radium(Person);