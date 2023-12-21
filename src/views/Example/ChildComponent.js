import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })

    }

    hanldeDeleteJob = (itemJob) => {
        this.props.deleteJob(itemJob);
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
                                                <p style={{ fontSize: '30px' }}>{item.title} - {item.salary} $ <span style={{ background: 'blue' }} onClick={() => this.hanldeDeleteJob(item)}>DELETE</span></p>
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