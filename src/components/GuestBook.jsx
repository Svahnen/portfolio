import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import TextField from 'material-ui/TextField'
import Save from 'material-ui-icons/Save'
import Button from 'material-ui/Button'

export default class GuestBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: ['Loading...'],
      name: ''
    }
  }
  componentDidMount () {
    fetch('https://svahnen-backend.herokuapp.com/guestbook')
      .then((res) => res.json())
      .then((data) => {
        this.handleGet(data)
    })
    this.interval = setInterval(() => {
      fetch('https://svahnen-backend.herokuapp.com/guestbook')
      .then((res) => res.json())
      .then((data) => {
        this.handleGet(data)
    })
    }, 5000)
  }

  render () {
    return (<div>
      <Navigation view='guestbook' />
      <TextField
          id="name"
          label="Enter your name"
          margin="normal"
          onChange={this.handleInputName}
        />
        <Button onClick={() => this.handlePost(this.state.name)} variant="raised" size="small">
        <Save />
        Save
      </Button>
    <ul>
      {this.state.data.map((data, index) => {
        return <li key={index}> {data} </li>
      })}
    </ul>
    </div>
    )
  }
  handleGet = (theData) => {
    this.setState({ data: theData })
  }
  handleInputName = (event) => {
    this.setState({ name: event.target.value })
  }
  handlePost = (theData) => {
    fetch('https://svahnen-backend.herokuapp.com/addguest',
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({name: theData})
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

  }
}
