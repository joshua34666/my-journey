import React from 'react'
import Person02 from './Person02'

const PersonList02 = () => {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person02 key={person.id} person={person}></Person02>)
    return <div>{personList}</div>
}

export default PersonList02