import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Start, AppHeader } from '../components';
import ContentHeader from '../components/content/ContentHeader';
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
      <ContentHeader />
      <ContentHOC startPressed={ startPressed}/>
    </SafeAreaView>
  )
}