import React from 'react'
import './App.css'

class App extends React.Component {

  // Constructeur
  constructor() {
    super()
    this.state = {
      lieux: []
    }
  }

  render() {

    // Rendu affiché dans le navigateur
    return (
      <div className='App'>
        <h1>Trajet du van</h1>
      </div>
    )
  }
}

export default App;
