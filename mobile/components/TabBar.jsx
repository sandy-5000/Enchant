import { View, StyleSheet } from 'react-native'
import React from 'react'
import TabBarButtons from '@/components/TabBarButtons'

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {
        state.routes.map((route, index) => {
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

          return (
            <TabBarButtons
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              color={isFocused ? 'white' : '#888'}
              label={label}
            />
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
})

export default TabBar
