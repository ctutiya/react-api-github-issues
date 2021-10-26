import { Component } from "react"

class IssuesLabels extends Component {
    render() {
        const colours = ['000000', '1436a8', 'd1323a', '3075c9', '098442', '055a82', '043be0', '0b3389']
        const { content } = this.props

        return (
            <div className="issues-labels">
                <p>
                    {content.map((label, idx) =>
                        (<span key={idx} className={`label ${colours.includes(label.color) ? 'white' : ''}`} style={{ backgroundColor: `#${label.color}` }}> {label.name}</span>)
                    )}
                </p>
            </div>
        )
    }
}

export default IssuesLabels
