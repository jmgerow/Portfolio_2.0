import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar'

describe('Navbar', () => {
    const navbar = shallow(<Navbar />)
  
    it('renders without crashing', () => {
      expect(navbar).toMatchSnapshot();
    });
 
    it('displays name', () => {
      expect(navbar.state().title).toEqual("Justin Gerow")
    });
  });

