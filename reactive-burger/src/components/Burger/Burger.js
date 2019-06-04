import React from 'react';
import classes from './Burger.css'
import BurgerIngredinet from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log('burger: ingredints' + JSON.stringify(props.ingredients));
    let transIngredients = 
            Object.keys(props.ingredients)
                .map(ingKey => {
                    console.log('ingredient ' + ingKey);
                    const burgerIng = [...Array(props.ingredients[ingKey])]
                                    .map((_, index)=> { 
                                            console.log('burger ingredinet ' + ingKey + index);
                                            return <BurgerIngredinet type={ingKey} key={ingKey+ index} />});   
                    console.log('butrger ing' + burgerIng);   
                    return burgerIng;                               
                    })
                .reduce((arr,el)=> {return arr.concat(el);}, []);
    if (transIngredients.length === 0){
        transIngredients = <p>Add some teasty ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredinet type="bread-top" />
            {transIngredients}
            <BurgerIngredinet type="bread-bottom" />
        </div>    
    );
}

export default burger;