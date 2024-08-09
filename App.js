
import { SafeAreaView, Text, View } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView >
      <View  style={{marginTop:50}}>
        <Text style={{textAlign:"center", fontSize:20, fontWeight:"bold"}}>Todo App</Text>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}


