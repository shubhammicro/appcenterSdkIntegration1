import codePush from 'react-native-code-push';

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START };

class MyApp extends Component {
  render() {
    return (
      <View>
        /* My App Code.. */
      </View>
    );
  }
}

export default codePush(codePushOptions)(MyApp); 