import React from 'react';
import renderer from 'react-test-renderer';
import { Loader } from 'react-cosmos-loader';
import Button from '../src/atomic/button';
import fixture from '../src/atomic/button/__fixtures__/default';

test('it renders a button component', () => {
  const tree = renderer.create(<Loader component={Button} fixture={fixture} />).toJSON();
  expect(tree).toMatchSnapshot();
});
