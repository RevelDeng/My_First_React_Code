import React from 'react';
import ReactDOM from 'react-dom';

var x = 5

const myfirstelement = (
  <>
    <h1>My First React Code!</h1>
    <ul>
      <li>{5 + 5}</li>
      <li>{6 * 6}</li>
    </ul>
    <p>{x < 10 ? x : x + 5}</p>
  </>
)

ReactDOM.render(
  myfirstelement,
  document.getElementById('root')
);
