import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        add1: 0,
        add2: 0,
        subtract1: 0, 
        subtract2: 0,
        times1: 0, 
        times2: 0,
        divide1: 0,
        divide2: 0
     }
    render() { 
        return ( <div> <h1>Real time basic math</h1>
        <h3> additon</h3>
        <button onClick={() => this.setState({add1: this.state.add1 +1})}>+1</button> 
        <br />
        <h2>{this.state.add1}</h2>
        <button onClick={() => this.setState({add1: this.state.add1 -1})}>-1</button>
        
<br />
<br />
        <button onClick={() => this.setState({add2: this.state.add2 +1})}>+1</button> 
        <h2>{this.state.add2}</h2>
        <button onClick={() => this.setState({add2: this.state.add2 -1})}>-1</button>
        <br /><br />

        <h3>+ Solution:{this.state.add1+this.state.add2}</h3>
{/*addition buttons end */}
<h3> subtraction</h3>
<button onClick={() => this.setState({subtract1: this.state.subtract1 +1})}>+1</button> 
        <h2>{this.state.subtract1}</h2>
        <button onClick={() => this.setState({subtract1: this.state.subtract2 -1})}>-1</button>
<br /><br />
        <button onClick={() => this.setState({subtract2: this.state.subtract2 +1})}>+1</button> 
        <h2>{this.state.subtract2}</h2>
        <button onClick={() => this.setState({subtract2: this.state.subtract2 -1})}>-1</button>
        <h3> - Solution:{this.state.subtract1-this.state.subtract2}</h3>
{/*subtraction buttons end */}
<h3> Multiplication</h3>
<button onClick={() => this.setState({times1: this.state.times1 +1})}>+1</button> 
        <h2>{this.state.times1}</h2>
        <button onClick={() => this.setState({times1: this.state.times1 -1})}>-1</button>
<br /><br />
        <button onClick={() => this.setState({times2: this.state.times2 +1})}>+1</button> 
        <h2>{this.state.times2}</h2>
        <button onClick={() => this.setState({times2: this.state.times2 -1})}>-1</button>
        <h3> * Solution:{this.state.times2*this.state.times2}</h3>
{/*End of multiplcation */}
<h3> Division</h3>
<button onClick={() => this.setState({divide1: this.state.divide1 +1})}>+1</button> 
        <h2>{this.state.divide1}</h2>
        <button onClick={() => this.setState({divide1: this.state.divide1 -1})}>-1</button>
<br /><br />
        <button onClick={() => this.setState({divide2: this.state.divide2 +1})}>+1</button> 
        <h2>{this.state.divide2}</h2>
        <button onClick={() => this.setState({divide2: this.state.divide2 -1})}>-1</button>
        <h3> / Solution:{this.state.divide1 / this.state.divide2}</h3>

        
        </div> );
    }
}
 
export default Counter;