import React from 'react';
import classes  from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredinet extends React.Component{
    render () {
    let ingredient = null;

    switch(this.props.type){
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
        break;
        case ('bread-bottom'):
            ingredient = (
                <div className={classes.BreadBottom}></div>
            );
        break;
        case ('meat'):
            ingredient = (
                <div className={classes.Meat}></div>
            );
            break;

        case ('cheese'):
            ingredient = (
                <div className={classes.Cheese}></div>
            );
        break;
        case ('salad'):
            ingredient = (
                <div className={classes.Salad}></div>
            );
        break;
        case ('bacon'):
            ingredient = (
                <div className={classes.Bacon}></div>
            );
        break;

        default:
        
        ingredient = null;
    }

    // <div class="box">
    // <div class="bread-top">
    //     <div class="seeds"></div>
    //     <div class="seeds2"></div>
    // </div>
    // <div class="salad"></div>
    // <div class="bacon"></div>
    // <div class="cheese"></div>
    // <div class="meat"></div>
    // <div class="bread-bottom"></div>
    // </div>

    return ingredient;
   }
}

BurgerIngredinet.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredinet;