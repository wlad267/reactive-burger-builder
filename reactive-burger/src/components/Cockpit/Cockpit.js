import React, { useState, useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    const appliedClasses = [];

    if (props.persons.length===1){
      appliedClasses.push(classes.red);
      appliedClasses.push(classes.bold);
    }

    useEffect(()=>{
        console.log('cockpit effect');

        return ()=> { console.log('cockpit cleanup effect');};
    }, []);

    const buttonStyle = {
            backgroundColor: 'green',
            color: 'white'
    };

    return (
        <div>
            <br></br>
            <h2>{props.title}</h2>
            <p className={appliedClasses.join(' ')}>Helllo Motto!</p>
            <button 
            className={appliedClasses}
            style={buttonStyle}       
            onClick={props.toggleShow}>switch my personality</button>
    
            <button 
            className={appliedClasses}
            onClick={props.toggleShow}>The same switch but diffrently styled</button>
        </div>  
    );
}

export default Cockpit;