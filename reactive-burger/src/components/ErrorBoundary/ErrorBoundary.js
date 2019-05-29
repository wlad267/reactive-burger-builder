import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    }

    componentDidCatch = (error , info) => {
        this.state({
            hasError: true,
            errorMsg: error
        });
    }

    render() {
        if (this.hasError) {
            return <h1>Something went wrong: {this.errorMsg} </h1>
        }else {
            return this.props.children;        
        }
       
    }

}

export default ErrorBoundary;