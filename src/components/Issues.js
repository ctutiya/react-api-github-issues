import { Component } from "react"
import IssuesCard from "./IssuesCard"

class Issues extends Component {
    render() {
        const { content } = this.props
        console.log('Content', content)

        return (
            <div className="issues-container">
                {content.length > 0 ?
                    content.map((item, idx) =>
                        (<IssuesCard key={idx} content={item} />)
                    ) : <h2>Issues not found!</h2>}
            </div>
        )
    }
}

export default Issues
