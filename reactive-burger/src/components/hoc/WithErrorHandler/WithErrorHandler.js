import React, {Component} from 'react';
import Modal from '../../UI/Modal/Modal';
import Aux from '../Auxiliary';
import Toast from '../../UI/Toast/Toast';

const withErrorHandler = (Wrappedcomponent, axios) => {

    return class extends Component { 
        
        state = {
            show: false
        };

        componentDidMount(){
            this.responseInterceptor = axios.interceptors.response.use((response, error)=> {
                console.log('response interceted');
                this.setState({show: true});
            });
        }

        componentWillUnmount(){
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        closeNotification(){
            console.log('closing the notification');
        }

        render() {
            return (     
                    <Aux>
                        {/* <Modal show={this.state.show}>
                            Somehting got wrong!!
                        </Modal> */}
                        <Toast />
                        <Wrappedcomponent {...this.props} />
                    </Aux>
                );
        }
    }
};

export default withErrorHandler;