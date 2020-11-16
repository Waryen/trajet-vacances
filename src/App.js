import React from 'react'
import {Form} from './components/formulaire/form.component'
import {List} from './components/liste/list.component'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { places: [], distances: [] }
  }

  // Chargement du state enregistré dans localstorage

  componentDidMount() {
    const state = localStorage.getItem('destinations')
    if (state) {
      this.setState(JSON.parse(state))
    }
  }

  // Gestion de l'input place

  handleChangePlace = (e) => {
    const newItem = e.target.value
    this.setState({ places: [...this.state.places, newItem] })
  }

  // Gestion de l'input distance

  handleChangeDistance = (e) => {
    const newItem = e.target.value
    this.setState({ distances: [...this.state.distances, newItem] })
  }

  // Gestion de l'envoie du formulaire

  handleSubmit = (e) => {
    //e.preventDefault()
    this.saveLocal()
    console.log(this.state)
  }

  // Sauvegarde du state dans localstorage

  saveLocal = () => {
    localStorage.setItem('destinations', JSON.stringify(this.state))
  }

  render() {

    // Rendu affiché dans le navigateur
    
    return (
      <div className='App'>
        <h1>Trajet du van</h1>
        <Form
          handleChangePlace = {this.handleChangePlace}
          handleChangeDistance = {this.handleChangeDistance}
          handleSubmit = {this.handleSubmit}
        />
        <h2>Liste des destinations</h2>
        <div className='list'>
          <div className='list-element'>
            <h3>Lieux:</h3>
            <ul>
              {this.state.places.map((value, index) => <li key={index}> {value} </li> )}
            </ul>
          </div>
          <div className='list-element'>
            <h3>Distances (km):</h3>
            <ul>
              {this.state.distances.map((value, index) => <li key={index}> {value} </li> )}
            </ul>
          </div>
        </div>
        <div className='copyrights'>
          <p>© Jonathan Gomand</p>
        </div>
      </div>
    )
  }
}

export default App;