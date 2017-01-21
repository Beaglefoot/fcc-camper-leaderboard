import React from 'react';
import ReactDOM from 'react-dom';

import Leaderboard from './components/Leaderboard';

require('./css/style.scss');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Camper Leaderboard of freeCodeCamp</h1>
        <Leaderboard />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
