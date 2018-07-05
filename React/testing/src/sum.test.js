import React from 'react';
import Hello from './sum';
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<Hello name="Jack" />);
  expect(wrapper.find('p').text()).toEqual('Hello, Jack!');
});
