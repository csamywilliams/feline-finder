import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MapContainer from './MapContainer';
import Map from '../Map/Map';

it('MapContainer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains a map component', () => {
  const wrapper = shallow(<MapContainer />);
  expect(wrapper.contains(<Map />)).toEqual(true);
});