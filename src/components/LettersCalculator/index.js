import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeCountInput = event => {
    this.setState(
      {searchInput: event.target.value}
    )
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <input
            type="text"
            id="html"
            placeholder="Enter the phrase"
            onChange={this.onChangeCountInput}
            value={searchInput}
            className="input-element"
          />
          <label for="html" className="para">Enter the phrase</label>
          <div className="count-container">
            <p className="count-letters">No.of letters: {searchInput.length}</p>
          </div>
        </div>
        <div>
          <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters calculator" />
        </div>
      </div>
    )
  }
}

export default LettersCalculator