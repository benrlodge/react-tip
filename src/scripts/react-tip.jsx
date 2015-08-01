import React, {Component, PropTypes, findDOMNode} from 'react';
import {bindAll} from 'underscore';

class ReactTip extends Component {

  constructor() {
    bindAll(this, 'handleMouseOut', 'handleMouseOver');

    this.state = {
      isShowing: false
    };
  }

  getTipStyle() {
    if (this.state.isShowing) {
      return {
        top: this.state.tooltipTop,
        display: 'block'
      };
    }
  }

  handleMouseOut() {
    this.setState({
      isShowing: false
    });
  }

  handleMouseOver() {

    let wrapperNode = findDOMNode(this.refs.reactTipWrapper);
    let tooltipTop = wrapperNode.offsetTop - 45;

    this.setState({
      isShowing: true,
      tooltipTop: tooltipTop
    });

  }

  render() {

    return (
      <div ref='reactTipWrapper' className='react-tip-wrapper' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.props.children}
        <div ref='reactTip' className='react-tip' style={this.getTipStyle()}>
          {this.props.tip}
        </div>
      </div>
    );

  }
}

ReactTip.propTypes = {
  children: PropTypes.node.isRequired,
  tip: PropTypes.string.isRequired
};

export default ReactTip;
