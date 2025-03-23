import {useNavigationState} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';
import {usePallete} from '../hooks/usePallete';

export const StatusBarWrapper = () => {
  const pallete = usePallete();

  const mode = useColorScheme();
  const themeBoundBarStyle = mode === 'dark' ? 'light-content' : 'dark-content';

  const navigationState = useNavigationState(state => state.index);
  const barStyle = navigationState === 0 ? 'light-content' : themeBoundBarStyle;

  return <StatusBar backgroundColor={pallete.surface} barStyle={barStyle} />;
};
