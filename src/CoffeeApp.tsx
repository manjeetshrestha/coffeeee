import {SafeAreaView} from 'react-native-safe-area-context';
import {CustomGoogleSigninButton} from './components/CustomGoogleSigninButton';

export const CoffeeApp = () => {
  return (
    <SafeAreaView>
      <CustomGoogleSigninButton />
    </SafeAreaView>
  );
};
