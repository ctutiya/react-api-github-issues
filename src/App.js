import { Component } from 'react'
import Issues from './components/Issues'

import './App.css'

class App extends Component {
    constructor() {
        super()

        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.fetchData()
    }

    fetchData = async (plabel = '') => {
        try {
            let query = ''

            if (plabel !== '') query = `&labels=${plabel}`

            const response =  await fetch(`https://api.github.com/repos/vercel/next.js/issues?state=open${query}`)
            const data = await response.json()

            this.setState({ data })
        }
        catch (error) {
            console.error(error)
        }
    }

    filterLabel = (event) => {
        event.preventDefault()

        this.fetchData(event.target.txtLabel.value)
    }

    render() {
        return (
            <>
                <h1>GitHub API - repository issues</h1>

                <form onSubmit={this.filterLabel}>
                    <input type="text" name="txtLabel" placeholder="enter label..." />
                    <button type="submit">filter</button>
                </form>

                <Issues content={this.state.data} />
            </>
        )
    }
}

export default App
