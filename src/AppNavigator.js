import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './Screens/Home'
import LoginScreen from './Screens/Login'
import TestViewScreen from './Screens/TestView'
import MainPageScreen from './Screens/MainPage'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  TestView:TestViewScreen,
  MainPage: MainPageScreen,
})

export default createAppContainer(AppNavigator)
