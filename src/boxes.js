import React, { Component } from 'react';
import Box from './Box';

class Boxes extends Component {
	boxes = [
		{size: 100},
		{size: 80},
		{size: 60},
		{size: 40},
		{size: 20},
		{size: 10},
		{size: 20},
		{size: 40},
		{size: 60},
		{size: 80},
		{size: 100}
	]

  render() {
    return this.boxes.map(box => <Box key={box} {...box}/>);
  }
}

export default Boxes;
