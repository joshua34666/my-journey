import React, { Component } from 'react'

export class Practicess extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       message: '',
       language: 'React'
    }
  }

  getUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  getMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  getLanguage = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  getSubmit = (event) => {
    alert(`${this.state.username} ${this.state.message} ${this.state.language}`)
    event.preventDefault()
  } 
  
  render() {
    return (
      <div>
        <form onSubmit={this.getSubmit}>
          <div>
            <label>Username: </label>
            <input type='text' value={this.state.username} onChange={this.getUsername} />
          </div>
          <div>
            <label>Message: </label>
            <textarea value={this.state.message} onChange={this.getMessage}></textarea>
          </div>
          <div>
            <label>Language</label>
            <select value={this.state.language} onChange={this.getLanguage} >
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Practicess
