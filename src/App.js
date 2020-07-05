import React from 'react';

import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate';

import './App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operator: null
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };

  render () {
    return (
      <div className="calculator-app" onKeyPress={this.handledKeyDown}>
        <Display value={this.state.next || this.state.total || "0"} />

        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}