import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div ref="wrapper" className="Board-wrapper"></div>
      </div>
    )
  }
}

export default Board;
