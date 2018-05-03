import React, { Component } from 'react'
import { render } from 'react-dom'
import { Stage, Layer, Rect, Text, Arrow, Group } from 'react-konva'
import Konva from 'konva'

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  }
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    })
  }

  handleMouseEnter = () => {
    document.body.style.cursor = 'pointer'
  }

  handleMouseExit = () => {
    document.body.style.cursor = 'auto'
  }

  render() {
    return (
<Group>
      <Rect
        text="Hello World"
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        draggable={true}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseExit}
      />
      <Arrow x={20}
      y={20}
      width={150}
      strokeWidth={3}
      points={[0,0,500,500]}
      pointerWidth={50}
      pointerLength={50}
      height={50}
      fill={this.state.color}
      shadowBlur={5}
      stroke='black'
      fill='black'
      draggable={true} />
</Group>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
        </Layer>
      </Stage>
    )
  }
}

render(<App />, document.getElementById('app'))
