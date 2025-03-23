import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {coffeeBg} from '../assets';
import {CustomGoogleSigninButton} from '../components';
import {availableSchemes} from '../global/colorSchemes';
import {gs} from '../global/styles';

export const AuthScreen = () => {
  const insets = useSafeAreaInsets();

  const safeAreaPaddings = {paddingBottom: insets.bottom};
  const bgStyle = {backgroundColor: availableSchemes.light.onSurface};

  return (
    <SafeAreaView style={[gs.flex1, safeAreaPaddings, bgStyle]}>
      <Image source={coffeeBg} style={[gs.flex1, styles.coffeeImage]} />
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
        style={[styles.columnGap]}>
        <Text style={[styles.headingText]}>
          {'Coffee so good,\nyour taste buds\nwill love it.'}
        </Text>

        <Text style={[styles.subHeadingText]}>
          The best grain,the finest roast,the powerful flavour.
        </Text>
        <View style={[styles.ph24]}>
          <CustomGoogleSigninButton />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  coffeeImage: {
    width: 'auto',
  },
  columnGap: {
    gap: 18,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  headingText: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 34,
    letterSpacing: 1,
    color: 'white',
    textAlign: 'center',
  },
  subHeadingText: {
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    letterSpacing: 1,
    color: 'white',
    textAlign: 'center',
  },
});
