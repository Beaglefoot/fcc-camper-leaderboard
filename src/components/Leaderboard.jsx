import React from 'react';
import fetch from 'node-fetch';

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
    target.parentNode.querySelectorAll('.glyphicon').forEach(element => {
      element.classList.add('hidden');
    });
    target.querySelector('.glyphicon').classList.remove('hidden');
  }

  render() {
    const campersList = this.state.campers.map((camper, index) => (
      <tr key={camper.username}>
        <th scope="row">{++index}</th>
        <td>
          <img src={camper.img} className="img-circle" width="32px" height="32px" />
          {' '}
          <a href={`http://freecodecamp.com/${camper.username}`}>
            {camper.username}
          </a>
        </td>
        <td className="text-center">{camper.recent}</td>
        <td className="text-center">{camper.alltime}</td>
      </tr>
    ));

    return (
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
