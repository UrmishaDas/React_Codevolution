import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: "",
             title: "",
             body: ""
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })


    }
    
    render() {

        const {userId, title, body} = this.state
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="userId" value={userId} placeholder="userId" onChange={this.changeHandler} />
                    </div>

                    <div>
                        <input type="text" name="title" value={title} placeholder="title" onChange={this.changeHandler} />
                    </div>

                    <div>
                        <input type="text" name="body" value={body} placeholder="body" onChange={this.changeHandler} />
                    </div>

                    <div>
                        <button onClick={this.submitHandler}> Submit </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;
