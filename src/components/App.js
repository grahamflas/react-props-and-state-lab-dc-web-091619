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

  //Callback to update state.filters.type
  onChangeType = (event) => {
    console.log("changing type...")
    this.setState( {
      filters: event.currentTarget.value
    } )
  }

  onFindPetsClick = () => {
    //if state.filters === all
      //fetch to /api/pets
    //if state.filters === `something else`
      //fetch to /api/pets/?type=${this.state.filters.type}
    //update state.pets with the response

    let url = (this.state.filters.type === "all") ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    debugger
    console.log(url)
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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
