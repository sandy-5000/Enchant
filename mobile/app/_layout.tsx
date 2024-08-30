import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'

const Home = () => {
  return (
    <Tabs
      tabBar={
        props => <TabBar {...props} />
      }
    >
      <Tabs.Screen name='index' options={{ title: 'Chat' }} />
      <Tabs.Screen name='group' options={{ title: 'Group' }} />
      <Tabs.Screen name='feed' options={{ title: 'Feed' }} />
      <Tabs.Screen name='call' options={{ title: 'Call' }} />
    </Tabs>
  )
}

export default Home
