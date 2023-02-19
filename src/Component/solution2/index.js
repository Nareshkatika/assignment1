import {Component} from 'react'

import Solution from '../solution1'

import './index.css'

class browserHistory extends Component {
  state = {search: ''}

  ondelete = id => {
    const {search} = this.state

    const update = search.filter(each => each.id !== id)

    this.setState({search: update})
  }

  solution = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    const {initialHistoryList} = this.props

    const result = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="bg-img">
        <div className="color">
          <div>
            <img
              alt="app logo"
              className="history"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <img
            alt="search"
            className="search"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          />
          <input
            type="search"
            placeholder="Search history"
            onChange={this.solution}
            className="select"
          />
        </div>

        <ul>
          {result.map(eachItem => (
            <Solution items={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default browserHistory
