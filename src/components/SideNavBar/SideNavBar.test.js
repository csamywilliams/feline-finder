import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SideNavBar from './SideNavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains a list item of', () => {
  const listItem  = <li>List item 4</li>;
  const wrapper = shallow(<SideNavBar />);
  expect(wrapper.contains(listItem)).toEqual(true);
});
