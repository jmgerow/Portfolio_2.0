import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'

describe('Footer', () => {
    const footer = shallow(<Footer />)
  
    it('renders without crashing', () => {
      expect(footer).toMatchSnapshot();
    });
 
    // it('displays name', () => {
    //   expect(navbar.state().title).toEqual("Justin Gerow")
    // });
  });
