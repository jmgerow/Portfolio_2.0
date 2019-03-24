import React from 'react';
import { shallow } from 'enzyme';
import Resume from './Resume';

describe('Resume', () => {
    const resume = shallow(<Resume />)
  
    it('renders without crashing', () => {
      expect(resume).toMatchSnapshot();
    });
 
  });