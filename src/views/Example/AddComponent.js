import react from "react";

class AddComponent extends react.Component {
    state = {
        title: '',
        Salary: '',
    }
    handletitleJob = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleSalary = (event) => {
        this.setState({
            Salary: event.target.value,

        })
    }

    handleSubmit = (event) => {
        // console.log(this.state);
        event.preventDefault();
        if (!this.state.title || !this.state.Salary) {
            alert('ban chua nhap: vui long nhap du cac field :))')
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.Salary
        })
    }
    render() {
        return (
            <form>
                <div className="row-input">
                    <label htmlFor="title">Title Job:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handletitleJob(event)}
                    />
                </div>
                <div className="row-input">
                    <label htmlFor="salary">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.Salary}
                        onChange={(event) => this.handleSalary(event)}
                    />
                </div>
                <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </form>
        )
    }
}


export default AddComponent; 