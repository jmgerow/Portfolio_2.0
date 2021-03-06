import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
  const app = shallow(<App />)

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });

  it('displays navbar component', () => {
    expect(app.find('Navbar').exists()).toBe(true);
  });

  it('displays footer component', () => {
    expect(app.find('Footer').exists()).toBe(true);
  });

  // it('renders home component', () => {
  //   expect(app.find('Home').exists()).toBe(true);
  // });

});


