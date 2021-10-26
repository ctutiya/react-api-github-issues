import { Component } from "react";
import IssuesHeader from "./IssuesHeader";
import IssuesLabels from "./IssuesLabels";

class IssuesCard extends Component {
    render() {
        const { content } = this.props

        return (
            <div className="issues-card">
                <IssuesHeader content={content} />
                <IssuesLabels content={content.labels} />
            </div>
        )
    }
}

export default IssuesCard
