import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../src/atomic/title';

test('it renders a title component', () => {
  const tree = renderer.create(<Title />).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('font-size', '1em');
});
