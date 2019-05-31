import React from 'react';
import { shallow, mount } from 'enzyme';

import Menu from '../index';

// const context = {
//   value: {
//     models: [],
//   },
//   onAddToCartClick: jest.fn(),
// };

// export const MyContext = {
//   Consumer(props) {
//     return props.children(context);
//   },
// };

// jest.mock('./Provider');
// test('function called on click', () => {
//   const component = mount(<Menu />);
//   component.find('button').simulate('click');
//   expect(context.onAddToCartClick.mock.calls.length).toBe(1);
// });

describe('<Menu />', () => {
  // it('should not crash', () => {
  //   const mWrapper = mount(<Menu />, { context: { value: { models: [] } } });
  //   // mWrapper.setContext({ models: [] });
  // });
  // describe('GetSectionTitle', () => {
  //   it('should return a singular string for the product', () => {
  //     props.initialData = { user: props.initialData.user };
  //     props.modifiedData = { user: props.initialData.user };
  //     props.models = [props.models[1]];
  //     const { getSectionTitle } = shallow(<ModelPage {...props} />).instance();
  //     expect(getSectionTitle()).toContain('singular');
  //   });
  // });
});
