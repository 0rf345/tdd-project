import React from 'react';
import TestComp from './TestComp';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let createProps = (props) => ({
  ...props
});

describe('Test Component', () => {
  let wrapper;
  let props;

  describe('Empty props', () => {

    it('Has only one place for the user message', () => {
      expect(wrapper.find('.message').length).toBe(1);
    });

    beforeEach(() => {
      props = {};
      wrapper = shallow(<TestComp {...props} />);  
    });

    it('Default message is shown', () => {
      expect(wrapper.find('.message').text()).toBe('default message');
    });
  });

  describe('Has some props', () => {
    beforeEach(() => {
      props = createProps({message: 'non-default message'});
      wrapper = shallow(<TestComp {...props} />);
    });
    it('Gets message from prop', () => {
      expect(wrapper.find('.message').text()).toBe('non-default message');
    });
  });

});
