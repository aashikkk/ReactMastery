import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=> {console.log('Callback value', this.state.count)})
        // console.log(this.state.count);

       this.setState((prevState, props)=> ({
            count: prevState.count + 1
       }))
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={()=> this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter