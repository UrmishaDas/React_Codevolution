import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef() // Using createRef()
    }

    
    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}> Click </button>
            </div>
        )
    }
}
