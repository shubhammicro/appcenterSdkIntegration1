import codePush from 'react-native-code-push';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

class App extends Component {
  render() {
    return (
      <View>
        /* My App Code..  is updated */
      </View>
    );
  }
}

export default codePush(codePushOptions)(App); 