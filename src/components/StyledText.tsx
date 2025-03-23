import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

type StyledTextName = 'soraDisplayLarge' | 'soraSubtitle' | 'robotoLabel';

interface Props extends TextProps {
  type?: StyledTextName;
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
}

export const StyledText = (props: Props) => {
  const {type, style, children, ...restOfProps} = props;
  return (
    <Text {...restOfProps} style={[styles[type || 'soraDisplayLarge'], style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  soraDisplayLarge: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 34,
    letterSpacing: 1,
  },
  soraSubtitle: {
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    letterSpacing: 1,
  },
  robotoLabel: {
    fontFamily: 'Roboto_Condensed-Medium',
    fontSize: 20,
  },
});

// font-family: Sora;
// font-weight: 400;
// font-size: 14px;
// line-height: 154%;
// letter-spacing: 1%;
// text-align: center;

// font-family: Sora;
// font-weight: 600;
// font-size: 34px;
// line-height: 100%;
// letter-spacing: 1%;
// text-align: center;

// font-family: Roboto;
// font-weight: 500;
// font-size: 20px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 400;
// font-size: 12px;
// line-height: 100%;
// letter-spacing: -0.24px;
// text-align: center;

// font-family: Sora;
// font-weight: 600;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 600;
// font-size: 32px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 400;
// font-size: 14px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 600;
// font-size: 18px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 600;
// font-size: 16px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 400;
// font-size: 12px;
// line-height: 100%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 400;
// font-size: 14px;
// line-height: 164%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 600;
// font-size: 14px;
// line-height: 164%;
// letter-spacing: 0%;

// font-family: Sora;
// font-weight: 600;
// font-size: 20px;
// line-height: 100%;
// letter-spacing: 0%;
