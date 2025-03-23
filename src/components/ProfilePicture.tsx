import {Image, StyleSheet} from 'react-native';

type Props = {
  uri?: string;
};

const FALLBACK_URI =
  'https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png';

export const ProfilePicture = ({uri}: Props) => {
  return (
    <Image
      source={{uri: uri ? uri : FALLBACK_URI}}
      style={[styles.imageContainer]}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 44,
    width: 44,
    borderRadius: 12,
  },
});
