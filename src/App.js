import React, { Component } from 'react';
import './style.css';
import Inputs from './Components/Inputs'
import CreditCard from './Components/CreditCard'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "CARDHOLDER",
      card: "••••   ••••   ••••   ••••",
      validity: "MM/YY"
    }
    this.changeName = this.changeName.bind(this)
    this.changeCardNumber = this.changeCardNumber.bind(this)
    this.changeValidThru = this.changeValidThru.bind(this)
  }

  changeName(value) {
    this.setState({
      name: value
    })
    return value
  }

  changeCardNumber(value) {
    this.setState({
      card: value
    })
    return value
  }

  changeValidThru(value) {
    this.setState({
      validity: value
    })
    return value
  }

  render() {
    return (
      <div className="app">
        <Inputs changeName={this.changeName} changeCardNumber={this.changeCardNumber} changeValidThru={this.changeValidThru} />
        <CreditCard name={this.state.name} card={this.state.card} validity={this.state.validity} />
      </div>
    );
  }
}

export default App;
