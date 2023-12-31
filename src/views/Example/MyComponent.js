import React from "react";
import ChildComponent from './ChildComponent';
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        jobLists: [
            { id: '001', title: 'Dev', salary: '1000' },
            { id: '002', title: 'Tester', salary: '400' },
            { id: '003', title: 'PM', salary: '2000' }
        ],
    }

    addNewJob = (job) => {
        this.setState({
            jobLists: [...this.state.jobLists, job],
        })
    }

    deleteJob = (itemJob) => {
        // this.setState({
        //     jobLists: [...this.state.jobLists]
        // })

        // let filteredJobLists = this.state.jobLists.filter(item => item.id !== itemJob.id)
        this.setState({
            jobLists: [...this.state.jobLists.filter(item => item.id !== itemJob.id)]
        });
    }

    render() {
        console.log('Call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <br />
                <ChildComponent
                    style={{ fontSize: '30px', color: 'yellow' }}
                    jobLists={this.state.jobLists}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent; 