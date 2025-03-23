import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {promoImage} from '../assets';
import {availableSchemes} from '../global/colorSchemes';

export const PromoBanner = () => {
  const [topTextWidth, setTopTextWidth] = useState(0);
  const [bottomTextWidth, setBottomTextWidth] = useState(0);

  return (
    <View style={[styles.mainContainer]}>
      <Image source={promoImage} style={[styles.promoImage]} />
      <View style={[styles.promoContentContainer]}>
        <View style={[styles.promoTagContainer]}>
          <Text
            style={[
              styles.promoBannerTag,
              {color: availableSchemes.light.surface},
            ]}>
            Promo
          </Text>
        </View>
        <View style={[styles.mt12]}>
          <View style={[styles.textContainerWrapper]}>
            <Text
              style={[styles.promoText]}
              onLayout={e => setTopTextWidth(e.nativeEvent.layout.width)}>
              Buy one get
            </Text>
            <View
              style={[
                styles.topTextContainer,
                {
                  width: topTextWidth,
                },
              ]}
            />
          </View>
          <View style={[styles.textContainerWrapper]}>
            <Text
              style={[styles.promoText]}
              onLayout={e => setBottomTextWidth(e.nativeEvent.layout.width)}>
              one Free
            </Text>
            <View
              style={[
                styles.bottomTextContainer,
                {
                  width: bottomTextWidth,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
  },
  promoImage: {
    borderRadius: 16,
    height: 140,
    width: 'auto',
  },
  promoBannerTag: {
    fontFamily: 'Sora-SemiBold',
  },
  promoText: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 32,
    zIndex: 1,
    color: availableSchemes.light.surface,
  },
  promoContentContainer: {
    position: 'absolute',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  promoTagContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: availableSchemes.light.red,
    borderRadius: 8,
  },
  mt12: {
    marginTop: 12,
  },
  textContainerWrapper: {
    alignItems: 'baseline',
    position: 'relative',
  },
  topTextContainer: {
    backgroundColor: '#1C1C1C',
    height: 27,
    position: 'absolute',
    bottom: -5,
  },
  bottomTextContainer: {
    backgroundColor: '#1C1C1C',
    height: 23,
    position: 'absolute',
    bottom: 0,
  },
});
