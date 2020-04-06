import codePush from 'react-native-code-push';

class App extends Component {
  const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };
  render() {
    return (
      <View>
        /* My App Code..  is updated */
      </View>
    );
  }
}

export default codePush(codePushOptions)(App); 