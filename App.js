
import { SafeAreaView, View } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView >
      <View  style={{marginTop:30}}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}


