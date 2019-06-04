import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button onClick={props.addIngrediant}>++ More ++</button>
        <button onClick={props.removeIngredient} disabled={props.disabled}>-- Less --</button>
    </div>
);

export default buildControl;