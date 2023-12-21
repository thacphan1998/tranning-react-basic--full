import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
        console.log('okie')

    }

    render() {

        let { jobLists } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobLists">
                            {
                                jobLists.map((item) => {
                                    if (item.salary >= 100) {
                                        return (
                                            <div className="itemJob" key={item.id}>
                                                <p style={{ fontSize: '30px' }}>{item.title} - {item.salary} $</p>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent; 