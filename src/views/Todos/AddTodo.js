import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        titleTodo: ''
    }

    handleAddTodo = (event) => {


        this.setState({
            titleTodo: event.target.value,
        })
    }

    handleSubmitAddNewTodo = () => {
        if (!this.state.titleTodo) {
            toast.error('bababa')
            return;
        }

        this.props.handleAddNewTodo({
            id: Math.floor(Math.random() * 1001),
            titleTodo: this.state.titleTodo
        })

        this.setState({
            titleTodo: ''
        })

    }

    render() {
        return (
            <div className="addTodo">
                <input type="text" value={this.state.titleTodo} onChange={(event) => this.handleAddTodo(event)} />
                <button type="submit" onClick={() => this.handleSubmitAddNewTodo()}>Add new</button>
            </div>
        )
    }
}

export default AddTodo;