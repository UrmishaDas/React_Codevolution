import React, { Component } from 'react'
import Input from './Input'

export default class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.compRef = React.createRef()
    }
    clickHandler = () => {
        this.compRef.current.focusInput()
    }

    
    render() {
        return (
            <>

            <Input ref={this.compRef} />
            <button onClick={this.clickHandler}> Focus Input</button>

            </>
        )
    }
}
