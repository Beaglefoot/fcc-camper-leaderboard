import React from 'react';

export default function(props) {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <img src={props.camper.img} className="img-circle" width="32px" height="32px" />
        {' '}
        <a href={`http://freecodecamp.com/${props.camper.username}`}>
          {props.camper.username}
        </a>
      </td>
      <td className="text-center">{props.camper.recent}</td>
      <td className="text-center">{props.camper.alltime}</td>
    </tr>
  );
}
