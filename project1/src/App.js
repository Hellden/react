import React, { Component } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Henry',
    age: 10
  },
  membre2: {
    nom: 'Raphael',
    age: '33'
  },
  membre3: {
    nom: 'Mocha',
    age: 8
  },
  membre4: {
    nom: 'Antho',
    age: 12
  }
}

class App extends Component {
  state = {
    famille
  }

  handleClick = () => console.log('Click')

  render () {
    const {famille} = this.state
    return (
      <div className='App'>
        <h1>React Project 1</h1>
        <Membre 
          nom={famille.membre1.nom} />
        <Membre 
          nom={famille.membre2.nom} />
        <Membre
          nom={famille.membre3.nom} />
        <Membre 
          nom={famille.membre4.nom} />

          <Button
            vieillir={this.handleClick}/>
      </div>
    )
  }
}

export default App
