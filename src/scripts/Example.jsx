import React from 'react';
import Tooltip from './react-tip.jsx';


class Example extends React.Component {

  render() {

    return (
      <div>
        <h1>react-tip</h1>
        <Tooltip tip="Check me out ya'll">
          <button>Check me out daawwwwwwwwg.</button>
        </Tooltip>
      </div>
    );

  }
}

export default Example;
