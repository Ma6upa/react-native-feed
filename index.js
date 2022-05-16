import { Navigation } from "react-native-navigation";
import ArticleScreen from "./src/js/screens/articleScreen";
import NewsScreen from "./src/js/screens/newsScreen";

Navigation.registerComponent('News', () => NewsScreen);
Navigation.registerComponent('Article', () => ArticleScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
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