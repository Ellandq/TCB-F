import React from 'react';
import Header from './Header';

const Content = () => {
  return React.createElement(
    'main',
    null,
    React.createElement(Header),
    'Tutaj znajduje się treść główna aplikacji.'
  );
};

export default Content;
