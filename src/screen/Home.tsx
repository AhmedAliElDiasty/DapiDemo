import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Start, AppHeader } from '../components';
import ContentHeader from '../components/content/ContentHeader';
import ContentHOC from '../provider/ContentHOC';

export default () => {
  return (
    <SafeAreaView>
      <Start />
      <AppHeader />
      <ContentHeader />
      <ContentHOC />
    </SafeAreaView>
  )
}