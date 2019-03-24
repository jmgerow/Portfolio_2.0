import React from 'react';
import { shallow } from 'enzyme';
import Homenav from './Homenav';

describe('Homenav', () => {
    const homenav = shallow(<Homenav />)
  
    it('renders without crashing', () => {
      expect(homenav).toMatchSnapshot();
    });
 
    // it('displays name', () => {
    //   expect(navbar.state().title).toEqual("Justin Gerow")
    // });
  });