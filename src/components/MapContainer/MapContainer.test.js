import React from 'react';
import ReactDOM from 'react-dom';
import MapContainer from './MapContainer';

it('MapContainer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
