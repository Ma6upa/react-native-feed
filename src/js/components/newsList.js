import React from 'react';
import { Text, FlatList, View, SafeAreaView, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import currentElement from '../store/currentElement';
import styles from '../styles/newsListStyles';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchNews()
  }, [])

  useEffect(() => {
    if (error) {
      Alert.alert(
        "Something went wrong",
        "Please, contact the support",
        [
          { text: "OK", onPress: () => setError(false) }
        ]
      );
    }
  }, [error])

  const fetchNews = () => {
    const options = {
      method: 'GET',
      url: 'https://api.newscatcherapi.com/v2/search',
      params: { q: 'bitcoin', lang: 'en', page: '1', page_size: '100' },
      headers: {
        'x-api-key': 'vsiwWzH2xmMcscRqgu8FTbskRQ2_epRCy8Nq6nQLgUE'
      }
    };

    axios.request(options).then(function (response) {
      if (response.status == 200) {
        setNews(response.data.articles)
      } else {
        setError(true)
      }
    }).catch(function (error) {
      setError(true)
    });
  }

  const onItemPress = (item) => {
    currentElement.chooseArticle(item)
  }

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const Item = ({ item }) => (
    <TouchableOpacity onPress={() => onItemPress(item)}>
      <View style={styles.container}>
        <Text style={styles.textstyle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      {news.length ?
        <FlatList
          data={news}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
        :
        <ActivityIndicator />
      }
    </SafeAreaView>
  );
}

export default NewsList;