import React from 'react'
import {Form} from './components/formulaire/form.component'
import {List} from './components/liste/list.component'
import {Calcul} from './components/calcul/calcul.component'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lieu: {
        name: '',
        km: 0
      },
      tab: []
    }
  }

  // Chargement du state enregistré dans localstorage

  componentDidMount() {
    const state = localStorage.getItem('lieux')
    if (state) {
      this.setState({tab: JSON.parse(state)})
    }
  }

  // Gestion des changements des inputs du formulaire

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      lieu: { ...prevState.lieu, [name]: value }
    }))
  }

  // Gestion de l'envoi du formulaire

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      tab: [...prevState.tab, prevState.lieu],
      lieu: { name: "", km: 0 }
    }))

    this.saveLocal()
  }

  // Sauvegarde du state dans localstorage

  saveLocal = () => {
    localStorage.setItem('lieux', JSON.stringify(this.state.tab))
  }

  render() {

    // Rendu affiché dans le navigateur

    return (
      <div className='App'>
        <h1>Trajet du van</h1>
        <Form
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          lieu = {this.state.lieu}
        />
        <h2>Liste des destinations</h2>
        <List props = {this.state.tab} />
        <h2>Total de kilomètres parcouru</h2>
        <Calcul props = {this.state.tab} />
      </div>
    )
  }
}

export default App;