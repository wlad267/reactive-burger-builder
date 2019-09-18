import React from 'react';
import classes from './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import {withRouter} from 'react-router-dom';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it all went testy!!!</h1>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                buttonType="Danger"     
                clicked={props.onCheckoutCancel}
                >CANCEL
                </Button>
            <Button 
                buttonType="Success"    
                clicked= {props.onCheckoutContinue}>
                    CONTINUE
                </Button>

        </div>
    );
};

export default withRouter(checkoutSummary);