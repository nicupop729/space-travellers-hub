import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionBtn from '../../components/Btns/MissionBtn';
import RocketBtn from '../../components/Btns/RocketBtn';

describe('snapshot testing', () => {
  test('snapshot for MissionBtn component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <MissionBtn />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });

  test('snapshot for RocketBtn component', () => {
    const rendererComponent = renderer
      .create(
        <Provider store={store}>
          <RocketBtn />
        </Provider>,
      )
      .toJSON();
    expect(rendererComponent).toMatchSnapshot();
  });
});
