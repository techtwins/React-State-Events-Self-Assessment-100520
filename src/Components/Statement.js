import React from 'react'
import { yes, no } from '../objects'

class Statement extends React.Component {

  noObj = {
    statement: no["no-statement"],
    image: no["no-image"]
  }

  yesObj = {
    statement: yes["yes-statement"],
    image: yes["yes-image"]
  }
  
  state = {
      statement: this.noObj.statement,
      image: this.noObj.image,
  }

  handleFlip = () => {
    // console.log("clicked")
    if (this.state.image === this.noObj.image) {
      this.setState({statement: this.yesObj.statement, image: this.yesObj.image})
    } else {
      this.setState({statement: this.noObj.statement, image: this.noObj.image})
    }
  }

  render() {
    return (
      <div className="img-div">
        <h1>{this.state.statement}</h1>
        <img onClick={this.handleFlip} src={this.state.image} alt={this.state.statement} />
      </div>
    )
  }

}

export default Statement;