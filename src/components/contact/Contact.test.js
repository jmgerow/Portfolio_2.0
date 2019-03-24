import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {
    const contact = shallow(<Contact />)
  
    it('renders without crashing', () => {
      expect(contact).toMatchSnapshot();
    });
 
  });