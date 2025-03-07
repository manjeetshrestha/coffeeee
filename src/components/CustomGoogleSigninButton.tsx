import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Button} from 'react-native';

export const CustomGoogleSigninButton = () => {
  const googleSignIn = () => {
    GoogleSignin.configure();
    GoogleSignin.signIn()
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return <Button title="Signin" onPress={googleSignIn} />;
};
