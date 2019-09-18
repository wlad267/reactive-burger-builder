import React, { Component } from 'react';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import { Route, withRouter } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    constructor(props) {
        super(props);

        console.log('---Checkout.props----' + JSON.stringify(props));

        this.state = {
            ingredients: {
                cheese: 0,
                meat: 0,
                cheese: 0,
                bacon: 0
            }
        }

        //bind these handlers to this component object, otherwise we loose this in the CheckoutSummary 
        this.canceHandler = this.canceHandler.bind(this);
        this.continueHandler = this.continueHandler.bind(this);
    }

    componentDidMount() {
        //this is how you parse query params
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({ 'ingredients': ingredients });
    }


    canceHandler() {
        console.log(this.props);
        this.props.history.goBack();
    }

    continueHandler() {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutContinue={this.continueHandler}
                    onCheckoutCancel={this.canceHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                    /*component={ContactData}*/
                    render={
                        (props) => {
                            return (
                                <ContactData ingredients={this.state.ingredients} {...props}/>
                            );
                        }} />
            </div>
        );
    }

}

export default withRouter(Checkout);