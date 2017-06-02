import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Board from './Board';
import MenuTop from './MenuTop';
import Dragula from 'react-dragula';
import 'react-dragula/dist/dragula.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MenuTop ref="MenuTop"/>
          <Board ref="Board"/>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const $constants = ReactDOM.findDOMNode(this.refs.MenuTop.refs.constants);
    const $functions = ReactDOM.findDOMNode(this.refs.MenuTop.refs.functions);
    const $conditionals = ReactDOM.findDOMNode(this.refs.MenuTop.refs.conditionals);
    const containers = [
      this.refs.MenuTop.refs.constants,
      this.refs.MenuTop.refs.functions,
      this.refs.MenuTop.refs.conditionals,
      this.refs.Board.refs.wrapper
    ]

    Dragula(containers, {
      copy(el, source) {
        return (
          source === $constants ||
          source === $functions ||
          source === $conditionals
        )
      },
      accepts(el, target) {
        return (
          target !== $constants &&
          target !== $functions &&
          target !== $conditionals
        )
      }
    });
  }
}

export default App;
