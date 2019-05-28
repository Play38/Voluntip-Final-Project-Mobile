import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/Home'
import TestScreen from './Screens/Test'
import TestViewScreen from './Screens/TestView'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Test: TestScreen,
  TestView:TestViewScreen,
})

export default createAppContainer(AppNavigator)
