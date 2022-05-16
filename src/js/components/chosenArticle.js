import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text } from 'react-native';
import currentElement from '../store/currentElement';

const ChosenArticle = observer(() => {
  return (
    <Text>{currentElement.chosenArticle.title}</Text>
  );
});

export default ChosenArticle;