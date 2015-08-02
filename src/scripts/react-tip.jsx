import React, {Component, PropTypes, findDOMNode} from 'react';
import {bindAll} from 'underscore';

class ReactTip extends Component {

  constructor() {

    bindAll(this, 'handleMouseOut', 'handleMouseOver');

    this.state = {
      isShowing: false
    };

  }

  componentDidMount() {

    let tooltipPositionVal;
    let wrapperNode = findDOMNode(this.refs.reactTipWrapper);

    if (this.props.placement === 'top') {
      tooltipPositionVal = wrapperNode.offsetTop - this.props.offset;
    }

    if (this.props.placement === 'bottom') {
      tooltipPositionVal = wrapperNode.offsetTop + wrapperNode.offsetHeight - 10 + this.props.offset;
    }

    this.setState({
      tooltipPositionVal: tooltipPositionVal
    });

  }

  getTipStyle() {
    let styles;
    if (this.state.isShowing) {
      styles = {
        display: 'block',
        top: this.state.tooltipPositionVal
      };
    }

    return styles;

  }

  getArrowStyles() {
    return 'react-tip-arrow';
  }

  handleMouseOver() {

    this.setState({
      isShowing: true
    });

  }

  handleMouseOut() {

    this.setState({
      isShowing: false
    });

  }

  render() {

    return (
      <span ref='reactTipWrapper' className='react-tip-wrapper' onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.props.children}
        <span ref='reactTip' className='react-tip' style={this.getTipStyle()}>
          {this.props.tip}
        </span>
        <span className={this.getArrowStyles()}></span>
      </span>
    );

  }

}

ReactTip.defaultProps = {
  placement: 'top',
  offset: 45
};

ReactTip.propTypes = {
  children: PropTypes.node.isRequired,
  tip: PropTypes.string.isRequired,
  placement: PropTypes.string,
  offset: PropTypes.number
};


export default ReactTip;
