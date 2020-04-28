import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';


describe('Header component', () => {
  it('Get Brand value', () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find('span').text();
    expect(text).toEqual('React Bootstrap');
  });
});