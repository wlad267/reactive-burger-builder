import React, {PureComponent} from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Auxiliary';

class Person extends PureComponent {
    
    scrollingListener(event) {
        console.log('scrolling');
    }

    componentDidMount() {
        console.log('person.js component ded update');
    }

    shouldComponentUpdate() {
        console.log('peson js let it be');
        return true;
    }

    sliderChange(event){
        console.log(event.target.value);
    }

    render() {
    console.log('person js render');
    const style ={
        color: 'red',
        backgroundColor: 'blue'
    }

    return (
        //<!-- we can use React.Fragment instead of HOC Aux-->
        <Aux className={classes.Person} onScroll={this.scrollingListener}>
            <p onClick={this.props.click}>This is a {this.props.name}, {this.props.age} age, {Math.random()*30}</p>
            <p>Child: {this.props.children}</p>
            <button style={style}>Personal Act</button>
            <input type="text" value={this.props.name} onChange={this.props.changed}/>
            <div className={classes.slidecontainer} >
                <input className={classes.slider} onChange={this.sliderChange} id="foo" type="range" />
            </div>    
        </Aux>    
    );
    }
}

export default Person;