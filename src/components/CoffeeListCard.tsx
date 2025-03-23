import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {addIcon, starIcon} from '../assets';
import {usePallete} from '../hooks/usePallete';

type Props = {
  onPress: () => void;
  cardWidth: number;
  image_url: string;
  rating: number;
  name: string;
  price: number;
};

export const CoffeeListCard = ({
  onPress,
  cardWidth,
  image_url,
  name,
  rating,
  price,
}: Props) => {
  const pallete = usePallete();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.cardContainer,
        {
          width: cardWidth,
          backgroundColor: pallete.surface,
        },
      ]}>
      <Image
        source={{
          uri: image_url,
        }}
        style={[
          styles.cardImageContainer,
          {height: cardWidth, width: cardWidth},
        ]}
      />
      <View style={[styles.ratingContainer]}>
        <Image source={starIcon} />
        <Text style={[styles.ratingText, {color: pallete.surface}]}>
          {rating}
        </Text>
      </View>
      <View style={[styles.cardInfoContainer]}>
        <Text style={[styles.cardTitle, {color: pallete.secondaryTextLight}]}>
          {name}
        </Text>
        <Text style={[styles.cardBody, {color: pallete.bodyText}]}>
          With Chocolate
        </Text>
      </View>
      <View style={[styles.cardFooterContainer]}>
        <Text style={[styles.priceTagLabel, {color: pallete.accentColor}]}>
          $ {price}
        </Text>
        <View
          style={[
            styles.addIconContainer,
            {backgroundColor: pallete.primaryColor},
          ]}>
          <Image source={addIcon} style={[styles.addIconDimensions]} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    height: 'auto',
    position: 'relative',
  },
  cardTitle: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  cardBody: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: 12,
  },
  priceTagLabel: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 18,
  },
  cardImageContainer: {
    borderRadius: 16,
    paddingHorizontal: 4,
    paddingVertical: 4,
    resizeMode: 'cover',
  },
  cardInfoContainer: {
    paddingHorizontal: 11,
    gap: 4,
    marginTop: 6,
  },
  ratingContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    gap: 10,
  },
  cardFooterContainer: {
    paddingLeft: 15,
    paddingRight: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 12,
  },
  ratingText: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 10,
  },
  addIconContainer: {
    height: 32,
    width: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIconDimensions: {
    height: 16,
    width: 16,
  },
});
