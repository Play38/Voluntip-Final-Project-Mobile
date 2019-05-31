import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './Screens/Login'
import MainPageScreen from './Screens/MainPage'

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  MainPage: MainPageScreen,
})

export default createAppContainer(AppNavigator)
