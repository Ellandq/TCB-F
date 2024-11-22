import React from 'react';

const UlubioneTechnologie = () => {
  const technologie = ['HTML', 'CSS', 'JavaScript'];
  return React.createElement(
    'ul',
    null,
    technologie.map((technologia, index) =>
      React.createElement('li', { key: index }, technologia)
    )
  );
};

export default UlubioneTechnologie;
