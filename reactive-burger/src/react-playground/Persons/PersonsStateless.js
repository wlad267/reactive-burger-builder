import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('persons js renering');
    return (
    props.persons.map((person, index) => {
        return ( <Person name={person.name} 
                          age={person.age} 
                          click={() => props.clicked(index)} 
                          changed={(event) => props.changed(event, person.id)} 
                          key={person.id} />
        );
                    })
)};

export default persons;