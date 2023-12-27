import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import Logo from "../../assets/images/Sample-jpg-image-10mb.jpg"

class Home extends React.Component {

    render() {
        return (
            <>
                <div>Hello component Home haha</div>
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
            </>
        )
    }
}

export default Color(Home);