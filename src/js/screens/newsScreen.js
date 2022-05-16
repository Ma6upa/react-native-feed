import React from 'react';
import { View } from 'react-native';
import NewsList from '../components/newsList';

const NewsScreen = () => {
  return (
    <View>
      <NewsList />
    </View>
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