import React, {Component} from 'react';
import posed from "react-pose";
import styled from "styled-components";
import { tweenEaseFast, tweenEaseSlow } from "./transitions.js"

const topPos = {
  y: 0, 
  scale: 1, 
  backgroundColor: '#1ce3ad',
  transition: {
    default: tweenEaseSlow,
  },
}

const highPos = {
  scale: 1.5, 
}

const botPos = {
  y: 400, 
  scale: 0.5, 
  backgroundColor: '#ffffff',
  transition: {
    default: tweenEaseFast,
  },
}

const StyledBox = styled(posed.div({
    top: topPos,
    highlighted: highPos,
    bottom: botPos,
  }))`
    ${props => `
      height: ${props.size}px;
      width: ${props.size}px;
      border-radius: 50%;
    `}
  `;

  class Box extends Component {
    state = {pose: 'top'}
  
    handleMouseEnter = () => this.setState({
      pose: this.state.pose === 'top' ? 'highlighted' : 'top'
    })
  
    handleMouseClick = () => this.setState({
      pose: this.state.pose === 'highlighted' ? 'bottom' : 'top'
    })
  
    handleMouseExit = () => this.setState({
      pose: this.state.pose === 'highlighted' ? 'top' : this.state.pose
    })
  
    render() {
      return <StyledBox
        size={this.props.size}
        pose={this.state.pose}
        onMouseEnter={this.handleMouseEnter}
        onClick={this.handleMouseClick} 
        onMouseOut={this.handleMouseExit}
      />
    }
  }
  
  export default Box;