import { observer } from 'mobx-react-lite';
import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import currentElement from '../store/currentElement';
import styles from '../styles/chosenArticleStyles';

const ChosenArticle = observer(() => {
  const article = currentElement.chosenArticle

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: article.media,
          }}
          resizeMode='stretch'
          style={styles.imageStyle}
        />
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.sourceStyle}>source: {article.clean_url}</Text>
        <Text style={styles.summaryStyle}>{article.summary}</Text>
        <Text style={styles.dateStyle}>{article.published_date}</Text>
      </View>
    </ScrollView>
  );
});

export default ChosenArticle;