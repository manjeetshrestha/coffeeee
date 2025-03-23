import {View} from 'react-native';
import {BottomTabs} from './components/BottomTabs';
import {gs} from './global/styles';
import {usePallete} from './hooks/usePallete';
import {AuthScreen} from './screens';
import {useUserProfileStore} from './store/userProfileStore';

export const CoffeeApp = () => {
  const {userProfile} = useUserProfileStore();
  const pallete = usePallete();

  const bgStyle = {backgroundColor: pallete.surface};

  if (!userProfile) {
    return <AuthScreen />;
  }

  return (
    <View style={[gs.flex1, bgStyle]}>
      <BottomTabs />
    </View>
  );
};
