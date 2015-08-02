import React from 'react';
import Tooltip from './react-tip.jsx';

class Example extends React.Component {

  render() {

    return (
      <div>
        <h1>react-tip</h1>
        <h3>A no-frills react tooltip</h3>

        <Tooltip placement="top" tip="I'm up top yo">
          <button>Hit me high</button>
        </Tooltip>

        <Tooltip placement="bottom" tip="nice" offset={0}>
          <button>Hit me medium</button>
        </Tooltip>

        <Tooltip placement="bottom" tip="You're too slow!!! lolololololololol!">
          <button>Hit me low</button>
        </Tooltip>

      </div>
    );

  }
}

export default Example;
