import '@/global.css'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View
      className="app-bg"
      style={styles.container}
    >
      <Text className="text-gray-200">Start Enchant!</Text>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#141719"
        translucent={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
