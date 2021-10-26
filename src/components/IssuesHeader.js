import { Component } from "react"

class IssuesHeader extends Component {
    render() {
        const { html_url: user_html_url, avatar_url, login } = this.props.content.user
        const { html_url, number, title } = this.props.content

        return (
            <div className="issues-header">
                <a href={user_html_url} target="_blank" rel="noreferrer">
                    <img src={avatar_url} alt={login} />
                </a>
                <p className="title">
                    <a href={html_url} target="_blank" rel="noreferrer"><strong>{number}</strong> {title}</a>
                </p>
            </div>
        )
    }
}

export default IssuesHeader
