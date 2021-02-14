import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import { Start, AppHeader } from '../components';
import ContentHOC from '../provider/ContentHOC';
import store from '../store/store';

export default () => {
  const [startPressed, setStartPressed] = useState(false)
  const startFetch = () => {
    setStartPressed(true);
  }
  return (
    <Provider store={store}>
      <SafeAreaView>
        {!startPressed && <Start handleStart={startFetch} />}
        <AppHeader />
        <ContentHOC startPressed={startPressed} />
      </SafeAreaView>
    </Provider>
  )
}