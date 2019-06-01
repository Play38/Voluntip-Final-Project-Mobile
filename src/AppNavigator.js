import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './Screens/Login'
import MainPageScreen from './Screens/MainPage'
import SignUpScreen from './Screens/SignUp'
const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  MainPage: MainPageScreen,
  SignUp: SignUpScreen
})

export default createAppContainer(AppNavigator)
