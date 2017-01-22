import React from 'react';
import fetch from 'node-fetch';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { campers: [] };
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => response.json())
      .then(campers => this.setState({ campers }));
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
            <th className="text-center">Points in the past 30 days</th>
            <th className="text-center">Total points</th>
          </tr>
        </thead>
        <tbody>
          {campersList}
        </tbody>
      </table>
    );
  }
}
