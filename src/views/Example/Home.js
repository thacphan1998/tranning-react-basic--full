import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import Logo from "../../assets/images/Sample-jpg-image-10mb.jpg"
import { connect } from "react-redux";

class Home extends React.Component {

    handleAddNewUserRedux = () => {
        this.props.addUserRedux();
    }

    handleDeleteUserRedux = (item) => {
        console.log(">>>check delete")
        this.props.deleteUserRedux(item);
    }

    render() {
        console.log('check props: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello component Home haha</div>
                <br />
                <div>
                    <img src={Logo} alt="Logo" style={{ width: '600px', height: '400px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div>
                                    {index + 1} - {item.name} <span><button style={{ fontSize: '20px' }} onClick={() => this.handleDeleteUserRedux(item)}>Delete</button></span>
                                </div>
                            )
                        })
                    }
                </div>
                <button style={{ fontSize: '20px' }} onClick={() => this.handleAddNewUserRedux()}>ADD NEW</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (disPatch) => {
    return {
        deleteUserRedux: (userDelete) => disPatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => disPatch({ type: 'ADD_NEW' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));