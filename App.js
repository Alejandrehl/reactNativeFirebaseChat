import Main from './components/Main';
import Chat from './components/Chat';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;