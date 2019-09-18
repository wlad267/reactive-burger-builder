import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './ContactData.css';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';

class ContactData extends Component {

    constructor(props) {
        super(props);
        this.orderHandler = this.orderHandler.bind(this);
        console.log('--ContactData-- props --' + JSON.stringify(this.props));
    }

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler(event) {
        //Do not post a request due to default form submit button behaviour
        event.preventDefault();

        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'Me',
                address: {
                    streat: 'NA'
                },
                email: 'wlad267@gmail.com',
                deliveryMethod: 'PREMIUM'
            }
        }

        axios.post('/orders', order).then(
            response => {
                console.log('posted ok');
                //add some timeout in order to see the spinner
                setTimeout(() => {
                    this.setState({ purchasing: false, loading: false });
                    this.props.history.push('/')
                }, 1000);

            }
        ).catch(error => {
            console.log('Please contact your administrator');
            //add some timeout in order to see the spinner
            setTimeout(() => {
                this.setState({ purchasing: false, loading: false });
            }, 1000);
        });
    }

    render() {

        let content;
        if (this.state.loading) {
            content = (<Spinner />);
        } else {
            content = (
                <form>
                    <input type='text' name='name' placeholder='your name' />
                    <input type='email' name='email' placeholder='email please' />
                    <input type='street' name='street' placeholder='your street name' />
                    <input type='postalCode' name='postalcode' placeholder='your postal code' />
                    <br />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            );
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {content}
            </div>
        );
    }
}

export default ContactData;