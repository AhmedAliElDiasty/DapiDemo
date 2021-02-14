import React, { useState } from 'react';
import {
  SafeAreaView, useWindowDimensions, View,
} from 'react-native';
import { Start, AppHeader } from '../components';
import ContentHOC from '../provider/ContentHOC';

export default () => {
  const [startPressed, setStartPressed] = useState(false)
  const startFetch = () => {
    setStartPressed(true);
  }
  return (
    <SafeAreaView>
      {!startPressed && <Start handleStart={startFetch} />}
      <AppHeader />
      <ContentHOC startPressed={startPressed} />
    </SafeAreaView>
  )
}