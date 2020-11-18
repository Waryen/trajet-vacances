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

  // Chargement du localstorage, si il existe, il l'ajoute dans le state

  componentDidMount() {
    const state = localStorage.getItem('lieux')
    if (state) {
      this.setState({tab: JSON.parse(state)})
    }
  }

  // Gestion des changements des inputs du formulaire, ajoute les données dans le state lieu

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      lieu: { ...prevState.lieu, [name]: value }
    }))
  }

  // Gestion de l'envoi du formulaire, ajoute les données du state lieu dans le state array tab

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      tab: [...prevState.tab, prevState.lieu],
      lieu: { name: "", km: 0 }
    }))
  }

  // Sauvegarde du state dans localstorage

  componentDidUpdate() {
    localStorage.setItem('lieux', JSON.stringify(this.state.tab))
  }

  render() {
    return (
      <div className='App'>
        <h1>Trajet du van</h1>
        <Calcul props = {this.state.tab} />
        <Form
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          lieu = {this.state.lieu}
        />
        <List props = {this.state.tab} />
        <p id='copyrights'><strong>© Jonathan Gomand</strong></p>
      </div>
    )
  }
}

export default App;