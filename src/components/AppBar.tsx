import {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  onBackComponent: ReactNode;
  title: ReactNode;
  actionComponent: ReactNode;
};

export const AppBar = ({onBackComponent, title, actionComponent}: Props) => {
  return (
    <View style={[styles.titleContainer]}>
      {onBackComponent}
      <Text>{title}</Text>
      {actionComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
    paddingVertical: 16,
  },
});
