import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../../components/missions/Missions';

describe('snapshot testing', () => {
  test('snapshot for Missions component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
