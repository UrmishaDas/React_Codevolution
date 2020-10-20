import React, { Component } from 'react'

export default class RefsDemo2 extends Component {
    constructor(props) {
        super(props)
    
        this.cbRef = null; // Using Callback Refs
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.setCbRef} />
            </div>
        )
    }
}
