import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/Home'
import TestScreen from './Screens/Test'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Test: TestScreen,
})

export default createAppContainer(AppNavigator)
