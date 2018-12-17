import React, { Component } from 'react'

class AJouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instruction: ''
    }
  render () {
    return (
   <div className="card">
       <form className="admin-form ajouter-recettes">
           <input name='nom' type='text' placeholder='Nom de la recette'/>
           <input name='image' type='text' placeholder='Nom image'/>
           <textarea name='ingredients' rows='3' placeholder='Nom des ingrédients'></textarea>
           <textarea name='instructions' rows='15' placeholder='Nom de la recette'></textarea>
       </form>
   </div>
    )
  }
}

export default AJouterRecette
