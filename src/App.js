import React from 'react'
import {Form} from './components/formulaire/form.component'
import {List} from './components/liste/list.component'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: null, distance: null }
  }

  // Gestion des inputs du formulaire
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    },
    this.saveLocal
    )
  }

  // Gestion de l'envoie du formulaire
  handleSubmit = (e) => {
    e.preventDefault()
    this.saveLocal()
    console.log(this.state)
  }

  // Sauvegarde du state dans localstorage
  saveLocal = () => {
    localStorage.setItem('destination', JSON.stringify(this.state))
  }

  render() {

    // Rendu affiché dans le navigateur
    return (
      <div className='App'>
        <h1>Trajet du van</h1>
        <Form
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <List data = {this.state} />
      </div>
    )
  }
}

export default App;