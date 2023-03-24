import React, { Component } from 'react'

import './App.css'
import Modal from './components/Modal/Modal'
import Backdrop from './components/Backdrop/Backdrop'
import List from './components/List/List'
import Transition from 'react-transition-group/Transition'

class App extends Component {
  state = {
    modalopen: false,
  }
  showModal = () => {
    this.setState({ modalopen: true })
  }
  closemodal = () => {
    this.setState({ modalopen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button>toggle</button>
        <Transition in={this.state.showBlock} timeout={300}>{/* transition is a a third party library where you
                                                             you can import some specific tags.'Transition has 4 states 
                                                             entering enterd exiting exited  */}
          {/* {state=><p>{state}</p>} */}

          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition:'opacity 1s ease-out',
                opacity:state==='exited'?0:1
              }}
            ></div>
          )}
        </Transition>


        <Transition in={this.state.modalopen} timeout={1000}>
          {state=>{
        <Modal show={state} closed={this.closemodal} />

          }}

        </Transition>
        <Backdrop show={this.state.modalopen} />
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )
  }
}

export default App
