import React from 'react';
import { Text } from 'react-native';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import ChosenArticle from '../components/chosenArticle';

const ArticleScreen = () => {
  return (
    <ViewNativeComponent>
      <Text>Article Page!</Text>
      <ChosenArticle />
    </ViewNativeComponent>
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