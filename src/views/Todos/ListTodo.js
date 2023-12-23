import React from "react";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: '1', titleTodo: 'Go to market' },
            { id: '2', titleTodo: 'Di nhau' },
            { id: '3', titleTodo: 'Play game' },
            { id: '4', titleTodo: 'code web reactjs' }
        ],
        editTodo: {}
    }

    handleAddNewTodo = (itemTodo) => {

        this.setState({
            listTodos: [...this.state.listTodos, itemTodo]
        })
        toast.success("Wow so easy!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // click save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];

            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].titleTodo = editTodo.titleTodo;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })

            toast.success("Wow edit success :))")
            return;
        }
        // click edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.titleTodo = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleDeleteTodo = (deleteTodo) => {
        this.setState({
            listTodos: [...this.state.listTodos.filter(item => item.id !== deleteTodo.id)]
        })
        toast.success("Delete success")
    }
    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>>check isEmpty:', isEmptyObj);

        return (
            <>

                <div className="listTodoContainer">
                    <AddTodo handleAddNewTodo={this.handleAddNewTodo} />
                    <br />
                    <div className="listTodoWrap">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="itemTodo" key={item.id}>
                                        <div>
                                            {isEmptyObj === true ?
                                                <span>{index + 1} - {item.titleTodo}</span>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <span>{index + 1} - <input type="text" value={editTodo.titleTodo} onChange={(event) => this.handleOnChangeEditTodo(event)} /></span>
                                                        :
                                                        <span>{index + 1} - {item.titleTodo}</span>
                                                    }
                                                </>
                                            }
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => this.handleEditTodo(item)}
                                            >
                                                {isEmptyObj === false && editTodo.id === item.id ?
                                                    'Save'
                                                    :
                                                    'Edit'

                                                }
                                            </button>
                                            -
                                            <button onClick={() => this.handleDeleteTodo(item)}>Delete</button></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;