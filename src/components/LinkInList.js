import React from 'react';

function LinkInList(props) {
  return (
    <li>
      <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
    </li>
  )
}

export default LinkInList;