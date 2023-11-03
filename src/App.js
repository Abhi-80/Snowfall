import React from 'react'
import './App.css';
import Snowflake from './Snowflake';

class App extends React.Component {
  snow = () => {
    let animationDelay = '0s';
    let fontSize = '100px';
    let arr = Array.from('Snowflakes are awesome!!! They are little pieces of magic!!! Love snowflakes!!!')
    return arr.map( i => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${(Math.floor(Math.random() * 10) + 10)}px`;
      let style = {
        animationDelay,
        fontSize
      }
      return (<Snowflake key={i} id={i} style={style} />)
    })
  }
  render() {
    return (
      <div className='App'>
          {this.snow()}
      </div>
    )
  }
}

export default App;