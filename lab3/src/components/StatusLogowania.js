import React from 'react';

const StatusLogowania = ({ isLoggedIn }) => {
  return React.createElement(
    'p',
    null,
    isLoggedIn ? 'Witaj ponownie!' : 'Proszę się zalogować'
  );
};

export default StatusLogowania;
