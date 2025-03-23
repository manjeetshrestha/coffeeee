import {Image, StyleSheet, TextInput, View} from 'react-native';
import {searchIcon, settingsIcon} from '../assets';
import {availableSchemes} from '../global/colorSchemes';
import {gs} from '../global/styles';

type Props = {
  filterString: string;
  setFilterString: (filter: string) => void;
};

export const SearchBar = ({filterString, setFilterString}: Props) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: availableSchemes.light.gray},
      ]}>
      <Image source={searchIcon} style={[styles.iconDimensions, styles.ml20]} />
      <TextInput
        placeholder="Search coffee"
        style={[gs.flex1, styles.textContainer]}
        placeholderTextColor="#989898"
        value={filterString}
        onChangeText={text => setFilterString(text)}
      />
      <View style={[styles.settingsContainer]}>
        <Image source={settingsIcon} style={[styles.iconDimensions]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconDimensions: {
    height: 20,
    width: 20,
  },
  ml20: {
    marginLeft: 20,
  },
  mainContainer: {
    height: 52,
    gap: 12,
    borderRadius: 14,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    color: '#989898',
  },
  settingsContainer: {
    height: 44,
    width: 44,
    backgroundColor: availableSchemes.light.primaryColor,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
});
