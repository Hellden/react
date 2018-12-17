import React, { Component } from 'react'
// CSS
import './App.css'
import Header from './components/Header'
import recettes from './recettes'
import Admin from './components/Admin'
import Card from './components/Card'

// Firebase
import base from './base'


class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  //Synchro Firebase.
  componentDidMount () {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: 'recettes'
    })
  }

ajouterRecette = recette => {
  const recettes = {... this.state.recettes }
  recettes[`recette-${Date.now()}`] = recette
  this.setState({recettes})
}

  //Déconnexion de la base pour éviter données persistente.
  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  chargerExemple = () => this.setState({recettes})

  render () {
    const cards = Object.keys(this.state.recettes)
      .map(key => <Card key={key} details={this.state.recettes[key]} />)
    return (
      <div className='box'>
        <Header pseudo= {this.state.pseudo} />
        <div className='cards'>
          <div className='card'>
            { cards }
          </div>
        </div>
        <Admin
          ajouterRecette={this.ajouterRecette}
          chargerExemple={this.chargerExemple} />
      </div>
    )
  }
}

export default App
