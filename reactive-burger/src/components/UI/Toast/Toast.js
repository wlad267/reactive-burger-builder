import React, {Component} from 'react';
import classes from './Toast.css';

export default class Toast extends Component {

    closeToast() {
        console.log('close toast');
    }

    render() {
        //silly toast - show mutiple please 
        return (
           <div className={[classes.Toast, classes.Success].join(" ")}>

               <div className={classes.MessageBody}>
                    <p>Toaster</p>
                </div>

                <div className={classes.Close} onClick={this.closeToast}>
                   X      
               </div>

           </div> 
        );
    }
}