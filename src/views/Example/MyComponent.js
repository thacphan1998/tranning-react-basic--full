import React from "react";
import ChildComponent from './ChildComponent';


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        jobLists: [
            { id: '001', title: 'Dev', salary: '1000' },
            { id: '002', title: 'Tester', salary: '400' },
            { id: '003', title: 'PM', salary: '2000' }
        ],
    }

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value,

        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value,

        })
    }

    handleAge = (event) => {
        this.setState({
            age: event.target.value,

        })
    }

    handleSubmit = (event) => {
        alert('click me thanh cong');
        event.preventDefault()
    }


    render() {
        console.log('Call render: ', this.state)
        return (
            <>
                <form>
                    <div className="row-input">
                        <label htmlFor="fmane">First Name:</label><br />
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={(event) => this.handleFirstName(event)}
                        />
                    </div>
                    <div className="row-input">
                        <label htmlFor="lname" >Last Name:</label><br />
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={(event) => this.handleLastName(event)}
                        />
                    </div>
                    <div className="row-input">
                        <label htmlFor="age" >Age:</label><br />
                        <input
                            type="text"
                            value={this.state.age}
                            onChange={(event) => this.handleAge(event)}
                        />
                    </div>
                    <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>
                <br />

                <ChildComponent
                    style={{ fontSize: '30px', color: 'yellow' }}
                    fname={this.state.firstName}
                    lname={this.state.lastName}
                    age={this.state.age}
                    jobLists={this.state.jobLists}
                />


            </>
        )
    }
}

export default MyComponent; 