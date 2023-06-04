import React from 'react'

const IndexKeyList = ({person}) => {
    return (
        <div>
            <h1>This is {person.name} of {person.age} years old. He is skilled in {person.skill} </h1>
        </div>
    )
}

export default IndexKeyList