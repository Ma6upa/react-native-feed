import React from 'react';
import { Text, View } from 'react-native';
import ChosenArticle from '../components/chosenArticle';

const ArticleScreen = (props) => {
  return (
    <View>
      <Text>Article Page!</Text>
      <ChosenArticle />
    </View>
  );
}

ArticleScreen.options = {
  topBar: {
    title: {
      text: 'Article'
    }
  },
  bottomTab: {
    text: 'Article'
  }
};

export default ArticleScreen;