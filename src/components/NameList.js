import React from 'react'

// const NameList = () => {
//     const names = ['Bruce', 'Clark', 'Diana']
//     return (
//         <div>
//             {
//                 names.map(name => <h2>{name}</h2>)
//             }
//         </div>
//     )
// }

const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>{nameList}</div>
    )
}

export default NameList