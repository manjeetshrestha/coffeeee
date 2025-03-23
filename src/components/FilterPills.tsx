import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {availableSchemes} from '../global/colorSchemes';

export const FilterPills = ({
  isSelected,
  label,
  onPress,
}: {
  isSelected: boolean;
  label: string;
  onPress: () => void;
}) => {
  const bgStyle = {
    backgroundColor: isSelected
      ? availableSchemes.light.primaryColor
      : availableSchemes.light.grayWhite,
  };

  const textColorStyle = {
    color: isSelected
      ? availableSchemes.light.surface
      : availableSchemes.light.accentColor,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[bgStyle, style.pillContainer]}>
      <Text style={[textColorStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  pillContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    height: 38,
  },
});
