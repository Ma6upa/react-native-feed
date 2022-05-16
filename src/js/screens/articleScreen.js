import React from 'react';
import { View } from 'react-native';
import ChosenArticle from '../components/chosenArticle';

const ArticleScreen = () => {
  return (
    <View>
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