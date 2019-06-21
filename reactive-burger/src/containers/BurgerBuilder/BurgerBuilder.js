import React from 'react';
import Aux from '../../components/hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummay from '../../components/Burger/OrderSummary/OrderSummary';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';

//ingrediants pices in dolars 
const INGREDINTET_PRICES ={
    salad: 0.4,
    cheese: 0.6,
    meat: 1.3,
    bacon: 1
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 1,
            bacon: 2
        },
        price: 5, //base price is 5$
        purchasable: true,
        purchasing: false,
        loading: false
    };

    addIngredinentHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount =  oldIngredientCount + 1;
        const updatedIngredints  = {...this.state.ingredients};
        updatedIngredints[type] = newIngredientCount;
        const oldPrince = this.state.price;
        const newPrice = oldPrince + INGREDINTET_PRICES[type];
        this.setState({price: newPrice, ingredients: updatedIngredints});
        this.updatePurchaseState(updatedIngredints);
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if (oldIngredientCount<=0){
            return;
        }
        const newIngredientCount =  oldIngredientCount - 1;
        const updatedIngredints  = {...this.state.ingredients};
        updatedIngredints[type] = newIngredientCount;
        const oldPrince = this.state.price;
        const newPrice = oldPrince - INGREDINTET_PRICES[type];
        this.setState({price: newPrice, ingredients: updatedIngredints});
        this.updatePurchaseState(updatedIngredints);
    }

    updatePurchaseState(updatedIngredients){
        const sum = Object.keys(updatedIngredients)
                        .map(key =>{
                            return updatedIngredients[key];})
                        .reduce((sum, el)=>{return sum +el}, 0);
        this.setState({purchasable: sum > 0 });
    }

    purchaseHandler= () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        console.log('continue with tour burger shopping');

        this.setState({loading: true});
        
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

        axios.post('orders', order).then(
            response => {
                console.log('posted ok');
                //add some timeout in order to see the spinner
                setTimeout( () => {
                    this.setState({purchasing: false, loading: false});
                }, 1000);
              
            }
        ).catch(error => {
            console.log('Please contact your administrator');
            //add some timeout in order to see the spinner
            setTimeout( () => {
                this.setState({purchasing: false, loading: false});
            }, 1000);
        });
    }

    scrolling(event){
        console.log('burger builder scrolling');
        event.stopPropagation();
        event.preventDefault();
    }

    render(){
        const disabledInfo ={...this.state.ingredients};
        
        for (let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key]<=0;
        }

        
        let modalContent = (
            <OrderSummay ingredients={this.state.ingredients}
            totalPrice={this.state.price}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            /> 
        );

        if (this.state.loading){
            modalContent = (<Spinner />);
        }

        return (
            <Aux onScroll={this.scrolling}>
                
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                   {modalContent}
                </Modal>
            
                <div onScroll={this.scrolling}   >
                     <Burger ingredients={this.state.ingredients} />
                </div>
                <BurgerControls 
                        purchasable={this.state.purchasable}
                        price={this.state.price}
                        purchase={this.purchaseHandler}
                        addIngrediant={this.addIngredinentHandler} 
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disabledInfo}/>
            </Aux>    
        );
    }

}

export default BurgerBuilder;