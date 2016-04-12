import React from 'react';

export const Lists = ({ lists }) => (
  <div>
    <ul>
      {lists.map((list) => (
        <li key={list._id}>{list.name}</li>
      ))}
    </ul>
  </div>
);
