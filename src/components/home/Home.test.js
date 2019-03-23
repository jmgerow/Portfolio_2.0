import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
    const home = shallow(<Home />)
  
    it('renders without crashing', () => {
      expect(home).toMatchSnapshot();
    });
 
    // it('displays name', () => {
    //   expect(navbar.state().title).toEqual("Justin Gerow")
    // });
  });