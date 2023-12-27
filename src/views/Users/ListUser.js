import React from "react";
import axios from "axios";
import "./listUser.scss"
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUsers: []
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=1')
            .then(res => {
                console.log(">>>", res);
                this.setState({
                    listUsers: res && res.data && res.data.data ? res.data.data : []
                })
            })
    }

    handleViewUserDetail = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;

        return (
            <div className="listUserContainer">
                <div className="title">List User</div>
                <div className="listUserContent">
                    {listUsers && listUsers.at.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="listUserItem" key={item.id}>
                                    {index + 1} - {item.first_name} {item.last_name} <button onClick={() => this.handleViewUserDetail(item)}>view Detail</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);