import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            axios.get(`https://reqres.in/api/users/${id}`)
                .then(res => {
                    console.log("check id params:", res)
                    this.setState({
                        user: res && res.data && res.data.data ? res.data.data : {}
                    })
                })
        }
    }

    handleBack = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>Hello Detail User: {this.props.match.params.id}</div>
                {isEmptyObj === false &&
                    <>
                        <div>Email: {user.email}</div>
                        <div>Name: {user.first_name} {user.last_name}</div>
                        <div>
                            <img src={user.avatar} alt="hahah" />
                        </div>
                        <div><button type="submit" onClick={() => this.handleBack()}>User Page back</button></div>
                    </>
                }

            </>
        )
    }
}

export default withRouter(DetailUser);