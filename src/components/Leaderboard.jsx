import React from 'react';
import fetch from 'node-fetch';
import Camper from './Camper';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { campers: [] };
  }

  componentDidMount() {
    this.fetchNewState('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchNewState(url) {
    fetch(url)
      .then(response => response.json())
      .then(campers => this.setState({ campers }));
  }

  switchGlyphVisibility(target) {
    // Workaround for this to work in test environment
    const nodesCollection = target.parentNode.querySelectorAll('span');
    Object.keys(nodesCollection).forEach(key => {
      nodesCollection[key].classList.add('hidden');
    });

    target.querySelector('.glyphicon').classList.remove('hidden');
  }

  render() {
    const campersList = this.state.campers.map((camper, index) => (
      <Camper key={camper.username} camper={camper} index={index} />
    ));

    if (!this.state.campers.length) return <div>Loading...</div>;
    else return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th
              className="text-center switch"
              onClick={event => {
                this.fetchNewState('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
                this.switchGlyphVisibility(event.target);
              }}
            >
              Past 30 days points{' '}
              <span className="glyphicon glyphicon-menu-down" aria-hidden="true" />
            </th>
            <th
              className="text-center switch"
              onClick={event => {
                this.fetchNewState('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
                this.switchGlyphVisibility(event.target);
              }}
            >
              Total points{' '}
              <span className="glyphicon glyphicon-menu-down hidden" aria-hidden="true" />
            </th>
          </tr>
        </thead>
        <tbody>
          {campersList}
        </tbody>
      </table>
    );
  }
}
