import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type:'meat'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Bacon', type:'bacon'}
];

const buildControls = (props) => (
    <div className={classes.buildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}$.$</strong></p> 
        {controls.map(cntrl => <BuildControl 
                                        key={cntrl.label} 
                                        label={cntrl.label} 
                                        addIngrediant={()=>props.addIngrediant(cntrl.type)}
                                        removeIngredient={()=>props.removeIngredient(cntrl.type)}
                                        disabled={props.disabled[cntrl.type]}/>)}
        
        <button 
                className={classes.OrderButton} 
                disabled={!props.purchasable}
                onClick={props.purchase}> Order Now</button>
    </div>
);

export default buildControls;