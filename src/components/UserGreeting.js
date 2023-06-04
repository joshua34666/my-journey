import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        // Short circuit operation
        return this.state.isLoggedIn && <div>Welcome Joshua</div>

        // conditional Tenary operator
        return (
            this.state.isLoggedIn ?
            (<div>Welcome Joshua</div>) :
            (<div>Welcome Guest</div>)
        )

        // Element Variables Approach 

        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Joshua</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        // IF ELSE APPROACH 
        // if(this.state.isLoggedIn) {
        //     return(
        //         <div>
        //             Welcome Joshua
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting