
import { SafeAreaView, Text, View } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView >
      <View  style={{marginTop:50}}>
        <Text className="text-2xl text-center font-bold">Todo App</Text>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}


