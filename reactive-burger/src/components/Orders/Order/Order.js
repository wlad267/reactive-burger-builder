import React from 'react';
import classes from './Order.css';

const order = (props) => {

    console.log(props);
    const order = props.order;


    return (
        <div className={classes.Order}>
            <div className={classes.DeleteIt}>delete it [x]</div>
            order: {order.id}
            <p>ingredints: {JSON.stringify(order.ingredients)}</p>
        </div>
    );
}

export default order;