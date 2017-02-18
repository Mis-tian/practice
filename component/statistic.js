import React, { Component } from 'react';
import Line from './Line';
import Column from './Column';

class Statistic extends Component { // eslint-disable-line
  render() {
    return (
      <div>
          <Line {...this.props}/>
          <Column {...this.props}/>
      </div>
    );
  }
}
export default Statistic;
