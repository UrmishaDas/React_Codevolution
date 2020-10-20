import React, { Component } from 'react'
//import { userConsumer } from './userContext'
import { UserConsumer } from './userContext'

export default class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    message => {
                        return (
                        <div>Hello {message}</div>
                //             <div>
                //     <h1> COMPONENT C </h1>
                //     <hr />
                //     I am from Component C and App Component has sent me a message : {message} 
                // </div>
                        )
                    }
                }
                
            </UserConsumer>
            
        )
    }
}
