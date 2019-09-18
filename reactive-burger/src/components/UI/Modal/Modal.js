import React , {Component} from 'react';
import classes from './Modal.css';
import Aux from '../../hoc/Auxiliary';
import BackDrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !==this.props.show || nextProps.children!==this.props.children;
    }

    componentDidUpdate(){
        console.log('Modal will update');
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modelClosed}/>
                <div className={classes.Modal}
                    style={{transform: this.props.show ? 'traslateY(0)' : 'traslateY(-100vh)',
                            opacity: this.props.show ? '1' : '0',
                            zIndex: this.props.show ? 500 : -1}}>
                    {this.props.children}
                </div>
            </Aux>
        ); 
    }

}

export default Modal;