import React from 'react'
import IndexKeyList from './IndexKeyList'

const IndexKey = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        {
            id: 1,
            name: 'Joshua',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Joshua',
            age: 22,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Joshua',
            age: 25,
            skill: 'Vue'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default IndexKey