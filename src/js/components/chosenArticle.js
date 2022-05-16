import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text } from 'react-native';

const ChosenArticle = observer(() => {
  return (
    <Text>Chosen Article component!</Text>
  );
});

export default ChosenArticle;