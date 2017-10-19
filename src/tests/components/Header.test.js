import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let startLogout;

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {  }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  // create spy with jest.fn()
  const startLogout = jest.fn()
  // set function equal to startLogout spy created above
  const wrapper = shallow(<Header startLogout={startLogout} />)
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
