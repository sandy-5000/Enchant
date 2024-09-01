import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Feather from '@expo/vector-icons/Feather'

const tabBarIcons = {
  index: (props) => <Ionicons name="chatbubbles-outline" size={24} {...props} />,
  group: (props) => <MaterialCommunityIcons name="account-group-outline" size={24} {...props} />,
  feed: (props) => <MaterialIcons name="dynamic-feed" size={24} {...props} />,
  call: (props) => <Feather name="phone-call" size={24} {...props} />,
}

export { tabBarIcons }
