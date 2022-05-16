import { Navigation } from "react-native-navigation";
import ArticleScreen from "./src/js/screens/articleScreen";
import NewsScreen from "./src/js/screens/newsScreen";

Navigation.registerComponent('News', () => NewsScreen);
Navigation.registerComponent('Article', () => ArticleScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#000'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#fd5904'
    }
  },
  bottomTab: {
    fontSize: 16,
    selectedFontSize: 18,
    selectedTextColor: '#fd5904',
  }
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'News'
                  }
                },
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Article'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
});