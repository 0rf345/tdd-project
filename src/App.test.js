import React from 'react';
import App from './App';
import TestComp from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let createProps = (props) => ({
  message: 'default message',
  ...props
});

describe('Test Component', () => {
  let wrapper;
  let props;
  it('will probably contain something in the future');
});
