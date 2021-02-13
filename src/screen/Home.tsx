import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';
import { Start, AppHeader } from '../components';
import ContentHeader from '../components/content/ContentHeader';
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
        <ContentHeader />
        <ContentHOC startPressed={startPressed} />
      </SafeAreaView>
    </Provider>
  )
}