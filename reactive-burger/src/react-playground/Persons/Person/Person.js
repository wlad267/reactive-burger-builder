import React, {PureComponent} from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/context';


class Person extends PureComponent {

    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }
    
    scrollingListener(event) {
        console.log('scrolling');
    }

    componentDidMount() {
        console.log('person.js component did mount');
        this.inputElementRef.current.focus();
    }

    // shouldComponentUpdate() {
    //     console.log('peson js let it be');
    //     return true;
    // }

    sliderChange(event){
        console.log(event.target.value);
    }

    render() {
    //console.log('person js render');
    const style ={
        color: 'red',
        backgroundColor: 'blue'
    }

    return (
        <Aux classes={classes.Person} onScroll={this.scrollingListener}>
            <AuthContext.Consumer>
                {
                    context => context.authentication ? <p>Authenticated</p> : <p>NotAuthenticated </p>
                }
            </AuthContext.Consumer>    
            <p onClick={this.props.click}>This is a {this.props.name}, {this.props.age} age, {Math.random()*30}</p>
            <p>Child: {this.props.children}</p>
            <button style={style}>Personal Act</button>
            <input 
                type="text" 
                //ref={(inEl)=>{this.inputElement = inEl}}
                ref={this.inputElementRef}
                value={this.props.name} 
                onChange={this.props.changed}/>
            <div className={classes.slidecontainer} >
                <input className={classes.slider} onChange={this.sliderChange} id="foo" type="range" />
            </div>    
        </Aux>    
    );
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    changed: PropTypes.func,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);