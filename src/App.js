import React from 'react'
import {Form} from './components/formulaire/form.component'
import './App.css'

class App extends React.Component {

  // Constructeur
  constructor(props) {
    super(props)
    this.state = {
      lieu: [],
      km: []
    }
  }

  // Modifcations du state
  handleChange = (e) => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    },
    this.saveLocal
    )
  }

  // Sauvegarde du state dans localstorage
  saveLocal = () => {
    localStorage.setItem('list', JSON.stringify(this.state))
  }

  render() {

    // Rendu affiché dans le navigateur
    return (
      <div className='App'>
        <h1>Trajet du van</h1>
        <Form
          handleChange = {this.handleChange}
        />
      </div>
    )
  }
}

export default App;