import React , {Component} from 'react';
import classes from './OrderSummary.css';
import Aux from '../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummay extends Component {

    componentDidUpdate(){
        console.log('OrderSummary component did uodate');
    }

    render () {
        const ingredintsSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return <li key={key}>
                        <span style={ {textTransform: 'capitalize'} }>{key}:</span> {this.props.ingredients[key]}
                    </li>
            });

        return (
            <Aux>
                <div className={classes.Summary}>
                <h3>Your Order:</h3>
                <p>Your delicious burger:</p>
                <ul>
                    {ingredintsSummary}
                </ul>
                <p>Continue to checkout ?</p>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <Button buttonType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
                <Button buttonType='Danger'  clicked={this.props.purchaseCanceled}>Cancel</Button>
                </div>
            </Aux>
        );
    }

}

export default OrderSummay;