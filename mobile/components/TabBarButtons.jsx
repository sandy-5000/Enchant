import { Pressable, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { tabBarIcons } from '@/assets/icons'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const TabBarButtons = (props) => {
  const { isFocused, label, routeName, color } = props

  const scale = useSharedValue(0)

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 })
  }, [scale, isFocused])

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.1])
    const top = interpolate(scale.value, [0, 1], [0, 10])

    return {
      transform: [{ scale: scaleValue }],
      top
    }
  })

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0])
    return { opacity }
  })

  return (
    <Pressable
      {...props}
      style={styles.tabBarItem}
    >
      <Animated.View style={[animatedIconStyle]}>
        {
          tabBarIcons[routeName]({ color })
        }
      </Animated.View>
      <Animated.Text
        style={
          [
            {
              color: isFocused ? 'white' : '#888',
              fontSize: 13,
            },
            animatedTextStyle,
          ]
        }
      >
        {label}
      </Animated.Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  }
})

export default TabBarButtons
