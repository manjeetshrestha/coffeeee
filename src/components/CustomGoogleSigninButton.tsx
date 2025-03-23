import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {googleLogo} from '../assets';
import {useUserProfileStore} from '../store/userProfileStore';
import {StyledText} from './StyledText';

export const CustomGoogleSigninButton = () => {
  const [loading, setLoading] = useState(false);
  const {setUserProfile} = useUserProfileStore();

  const googleSignIn = () => {
    setLoading(true);
    GoogleSignin.configure({
      iosClientId: process.env.IOS_CLIENT_ID,
    });
    GoogleSignin.signIn()
      .then(res => {
        if (res.type === 'success') {
          const name = res.data.user.name || '';
          const photoUrl = res.data.user.photo || '';
          const id = res.data.user.id;
          setUserProfile({name, photoUrl, id});
        }
      })
      .catch(err => {
        Alert.alert('GoogleSignin failed!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={googleSignIn}>
      <View style={[styles.outerContainer]}>
        {loading ? (
          <View style={[styles.innerContainer]}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={[styles.innerContainer]}>
            <Image source={googleLogo} />
            <StyledText
              type="robotoLabel"
              style={{color: 'rgba(0, 0, 0, 0.54)'}}>
              Continue with Google
            </StyledText>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingHorizontal: 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: 52,
  },
  innerContainer: {
    paddingLeft: 10,
    paddingRight: 15,
    paddingTop: 9,
    paddingBottom: 12,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: 11,
    maxWidth: 261,
  },
});
