import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render login page correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  // create spy with jest.fn()
  const startLogin = jest.fn()
  // set function equal to startLogin spy created above
  const wrapper = shallow(<LoginPage startLogin={startLogin} />)
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});