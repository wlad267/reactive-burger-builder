import React from 'react';
import Aux from '../../components/hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

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
        price: 5 //base price is 5$
    };

    addIngredinentHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount =  oldIngredientCount + 1;
        const updatedIngredints  = {...this.state.ingredients};
        updatedIngredints[type] = newIngredientCount;
        const oldPrince = this.state.price;
        const newPrice = oldPrince + INGREDINTET_PRICES[type];
        this.setState({price: newPrice, ingredients: updatedIngredints});
    }

    removeIngredient = (type) => {
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
    }

    render(){
        const disabledInfo ={...this.state.ingredients};
        for (let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key]<=0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls 
                        price={this.state.price}
                        addIngrediant={this.addIngredinentHandler} 
                        removeIngredient={this.removeIngredient}
                        disabled={disabledInfo}/>
            </Aux>    
        );
    }

}

export default BurgerBuilder;