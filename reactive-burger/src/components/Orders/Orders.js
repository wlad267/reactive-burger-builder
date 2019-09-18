import React, {Component} from 'react';
import axios from 'axios';
import Order from './Order/Order';
import classes from './Orders.css';

class Orders extends Component {

    state= {
        orders: []
    }
    componentDidMount(){
        axios.get('/orders').then((res)=>{
            console.log('----ORDERS:'+ JSON.stringify(res));
            this.setState({'orders':res.data})
        }).catch((err)=>{
            console.log('server error'+ err);
        })
    }
    render(){

        let orders = [];
        if (this.state.orders.length>0){
            for (let o of this.state.orders){
                orders.push(<Order order={o} />);
            }
        }
        

        return (
            <div className={classes.Orders}>
                Orders perform by hungry people:
                {orders}
            </div>
        );
    }
}

export default Orders;