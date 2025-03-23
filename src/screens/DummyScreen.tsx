import {ActivityIndicator, View} from 'react-native';
import {StatusBarWrapper} from '../components/StatusBarWrapper';
import {gs} from '../global/styles';
import {usePallete} from '../hooks/usePallete';

export const DummyScreen = () => {
  const pallete = usePallete();

  return (
    <>
      <StatusBarWrapper />
      <View style={[gs.flex1, gs.center, {backgroundColor: pallete.surface}]}>
        <ActivityIndicator size={'large'} />
      </View>
    </>
  );
};
