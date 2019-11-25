import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState( {
      filters: {
        type: event.currentTarget.value
      }
    } )
  }

  onFindPetsClick = () => {
    let url = (this.state.filters.type === "all") ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    
    fetch(url)
      .then( resp => resp.json() )
      .then( petArray => {
        this.setState( {
          pets: petArray
        } )
      } )
  }

  onAdoptPet = (id) => {
    //find pets id in the state.pets array, change isAdopted to true
    let updatedPets = this.state.pets.map( pet => {
     if(pet.id === id){
       return pet.isAdopted = true
     }else{
       return pet
     }
    } )
    console.log(updatedPets)
    
    // this.setState( {
    //   pets: [...this.state.pets, adoptedPet]
    // } )
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
