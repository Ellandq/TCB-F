import React from 'react';

const Przycisk = () => {
  return React.createElement('button', { onClick: () => alert('Przycisk kliknięty!') }, 'Kliknij mnie');
};

export default Przycisk;
