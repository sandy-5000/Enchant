import '@/global.css'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  message: string
}

export default function StartView({ message }: Props) {
  return (
    <View
      className="app-bg"
      style={styles.container}
    >
      <Text className="text-gray-200">{message || 'Start Enchant!'}</Text>
      <StatusBar
        style='light'
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
