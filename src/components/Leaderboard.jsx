import React from 'react';

export default class Leaderboard extends React.Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th>Points in the past 30 days</th>
            <th>Total points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>chmo</th>
            <th>1</th>
            <th>1</th>
          </tr>
          <tr>
            <th>2</th>
            <th>chmoshnik</th>
            <th>2</th>
            <th>2</th>
          </tr>
        </tbody>
      </table>
    );
  }
}
