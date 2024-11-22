import React from 'react';
import Witaj from './components/Witaj';
import Przycisk from './components/Przycisk';
import UlubioneTechnologie from './components/UlubioneTechnologie';
import ONas from './components/ONas';
import Powitanie from './components/Powitanie';
import StatusLogowania from './components/StatusLogowania';
import Content from './components/Content';

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(Witaj),
    React.createElement(Przycisk),
    React.createElement(UlubioneTechnologie),
    React.createElement(ONas),
    React.createElement(Powitanie, { name: 'Jan' }),
    React.createElement(StatusLogowania, { isLoggedIn: true }),
    React.createElement(Content)
  );
};

export default App;
