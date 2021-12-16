import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Component from '../../components/profile/Component';

describe('snapshot testing', () => {
  test('snapshot for Component component', () => {
    const activeRockets = [
      { test1: 1, test2: 2 },
      { test3: 3, test4: 4 },
    ];
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <Component reservations={activeRockets} />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
