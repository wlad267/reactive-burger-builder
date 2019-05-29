import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state){

    // }

    shouldComponentShouldUpdate(nextProps, nextState){
        console.log('persons js shouldComponentShouldUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(nextState, nextProps){
        console.log('persons js getShaphotBeforeUpdate ');
        return {msg: ' the snapsot'};
    }

    componentDidUpdate(snapshot){
        console.log('persons js component did mount' + JSON.stringify(snapshot));
    }

    render() {
    console.log('persons js renering');
    return (
    this.props.persons.map((person, index) => {
        return ( <Person name={person.name} 
                          age={person.age} 
                          click={() => this.props.clicked(index)} 
                          changed={(event) => this.props.changed(event, person.id)} 
                          key={person.id} />
                        );
                    })
)};
}

export default Persons;