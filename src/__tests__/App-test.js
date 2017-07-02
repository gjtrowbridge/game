import React from 'react';
import App from 'Components/App';
import { shallow } from 'enzyme';

// import React from 'react';
describe('<App />', () => {
  test('renders an element with an .App class name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').length).toBe(1);
  });
});

