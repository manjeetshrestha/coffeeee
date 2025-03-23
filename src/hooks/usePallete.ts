import {useColorScheme} from 'react-native';
import {availableSchemes} from '../global/colorSchemes';

export const usePallete = () => {
  const scheme = useColorScheme();
  const colorScheme = availableSchemes[scheme || 'dark'];
  return colorScheme;
};

export type PalleteType = (typeof availableSchemes)['light'];
