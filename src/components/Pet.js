import React from 'react'

class Pet extends React.Component {
  render() {
    let {age, gender, id, isAdopted, name, type, weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {name}
            {gender === "male" ? "♂" : "♀"}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted === true ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button 
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(id)}
            >
              Adopt pet
            </button>
          )
          }
        </div>
      </div>
    )
  }
}

export default Pet
