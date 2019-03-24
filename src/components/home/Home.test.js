import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
    const home = shallow(<Home />)
  
    it('renders without crashing', () => {
      expect(home).toMatchSnapshot();
    });
 
    it('renders homenav on homepage', () => {
        expect(home.find('Homenav').exists()).toBe(true);
    });
  });