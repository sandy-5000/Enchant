import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Feather from '@expo/vector-icons/Feather'

interface Props {
  state: any,
  descriptors: any,
  navigation: any
}

const TabBar = ({ state, descriptors, navigation }: Props) => {

  const icons: Map<string, CallableFunction> = new Map([
    ['index', (props: any) => <Ionicons name="chatbubbles-outline" size={24} {...props} />],
    ['group', (props: any) => <MaterialCommunityIcons name="account-group-outline" size={24} {...props} />],
    ['feed', (props: any) => <MaterialIcons name="dynamic-feed" size={24} {...props} />],
    ['call', (props: any) => <Feather name="phone-call" size={24} {...props} />],
  ])

  return (
    <View style={styles.tabBar}>
      {
        state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : (
              options.title !== undefined
                ? options.title
                : route.name
            )

          if (['_sitemap', '+not-found'].includes(route.name)) {
            return null
          }

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          const tabIcon = icons.get(route.name)

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessiblityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItem}
            >
              {
                tabIcon && tabIcon({
                  color: (isFocused ? 'white' : '#888'),
                })
              }
              <Text style={{ color: isFocused ? 'white' : '#888' }}>
                {label}
              </Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e2326',
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default TabBar
