import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import MapContainer from '../MapContainer/MapContainer';
import Results from '../Results/Results';
import Content from './Content';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Content />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains a map container component', () => {
  const wrapper = shallow(<Content />);
  expect(wrapper.contains(<MapContainer />)).toEqual(true);
});

it('contains a results component', () => {
  const wrapper = shallow(<Content />);
  expect(wrapper.contains(<Results />)).toEqual(true);
});