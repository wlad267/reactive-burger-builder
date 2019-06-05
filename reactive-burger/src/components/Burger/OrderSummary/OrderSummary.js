import React from 'react';
import classes from './OrderSummary.css';
import Aux from '../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummay = (props) => {
    const ingredintsSummary = Object.keys(props.ingredients)
            .map(key => {
                return <li key={key}>
                        <span style={ {textTransform: 'capitalize'} }>{key}:</span> {props.ingredients[key]}
                    </li>
            })

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>Your delicious burger:</p>
            <ul>
                {ingredintsSummary}
            </ul>
            <p>Continue to checkout ?</p>
            <Button buttonType='Success' clicked={props.purchaseCanceled}>Continue</Button>
            <Button buttonType='Danger'  clicked={props.purchaseContinued}>Cancel</Button>
        </Aux>
    );    
}

export default orderSummay;