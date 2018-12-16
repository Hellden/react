import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

// Firebase
import base from './base'


// Animation
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'


class App extends Component {
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

componentDidMount() {
  base.syncState('/', {
    context: this,
    state: 'messages'
  })
}

componentDidUpdate(){
  const ref = this.messagesRef.current
  ref.scrollTop = ref.scrollHeight
}

  addMessage = message => {
    const messages = { ...this.state.message}
    messages[`message-${Date.now()}`] = message
    Object
    .keys(messages)
    .slice(0,10)
    .forEach(key => {
      messages[key] = null
    })
    this.setState({messages})
  }

  render () {
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
        key={key}
          message={this.state.messages[key].message}
          pseudo={this.state.messages[key].pseudo}/>
      )) 

    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            <TransitionGroup className="message">
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire
        length={140}
        pseudo={this.state.pseudo}
        addMessage={this.addMessage} />
      </div>
    )
  }
}

export default App
