import React from 'react';
import { Text, View } from 'react-native';
import NewsList from '../components/newsList';

const NewsScreen = (props) => {
  return (
    <View>
      <Text>News Page!</Text>
      <NewsList componentId={props.componentId} />
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