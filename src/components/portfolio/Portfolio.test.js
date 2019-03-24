import React from 'react';
import { shallow } from 'enzyme';
import Portfolio from './Portfolio';

describe('Portfolio', () => {
    const portfolio = shallow(<Portfolio />)
  
    it('renders without crashing', () => {
      expect(portfolio).toMatchSnapshot();
    });
 
  });