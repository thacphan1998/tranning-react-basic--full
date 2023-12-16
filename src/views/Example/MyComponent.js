import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Phan',
        developer: 'frontend',
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
            developer: 'backend',
        })
    }

    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} /> <br />
                    <p>My name is: {this.state.name}</p>
                </div>
                <div className="first">DEV: {this.state.developer}</div>
            </>
        )
    }
}

export default MyComponent; 