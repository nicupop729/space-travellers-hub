import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../../components/rockets/Rockets';

describe('snapshot testing', () => {
  test('snapshot for Rockets component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
