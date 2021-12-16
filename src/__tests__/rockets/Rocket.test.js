import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rocket from '../../components/rockets/Rocket';

describe('snapshot testing', () => {
  test('snapshot for Rocket component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
