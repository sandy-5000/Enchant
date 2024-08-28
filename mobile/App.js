import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView className="bg-[#141719]" style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text className="text-gray-200">Start Enchant!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
