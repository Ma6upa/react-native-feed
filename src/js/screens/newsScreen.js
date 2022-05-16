import React from 'react';
import { Text } from 'react-native';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import NewsList from '../components/newsList';

const NewsScreen = () => {
  return (
    <ViewNativeComponent>
      <Text>News Page!</Text>
      <NewsList />
    </ViewNativeComponent>
  );
}

NewsScreen.options = {
  topBar: {
    title: {
      text: 'News'
    }
  },
  bottomTab: {
    text: 'News'
  }
};

export default NewsScreen;