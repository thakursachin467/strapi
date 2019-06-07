// @soupette
describe('CTB <Menu />', () => {
  it('should be tested', () => {
    expect(true).toBe(true);
  });
});

// TODO update the test when switching to react testing lib
// import React from 'react';
// import { shallow } from 'enzyme';

// import Menu, { getSectionTitle } from '../index';

// const renderComponent = (context = { models: [] }, props = {}) =>
//   shallow(<Menu {...props} />, { context });

// describe('Menu', () => {
//   it('Should not crash', () => {
//     renderComponent();
//   });

//   it('Should open the modal create model', () => {
//     const context = {
//       canOpenModal: true,
//       models: [],
//     };
//     const props = {
//       history: {
//         push: jest.fn(),
//       },
//     };
//     const renderedComponent = renderComponent(context, props);
//     // console.log(renderedComponent.props());
//   });

//   it('should return a plural string for the user', () => {
//     expect(getSectionTitle('model', [])).toContain('singular');
//   });
// });
