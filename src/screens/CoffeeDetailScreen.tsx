import {useState} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {arrowLeft, beanIcon, heartIcon, milkIcon, starIcon} from '../assets';
import {AppBar} from '../components';
import {availableSchemes} from '../global/colorSchemes';
import {gs} from '../global/styles';
import {usePallete} from '../hooks/usePallete';
import {useCoffeeItemsStore} from '../store/useCoffeeStore';

const DESCRIPTION_LENGTH = 20;

export const CoffeeDetailScreen = ({
  coffeeItemId,
  onClose,
}: {
  coffeeItemId: number | null;
  onClose: () => void;
}) => {
  const pallete = usePallete();
  const {items} = useCoffeeItemsStore();
  const [selectedSize, setSelectedSize] = useState(1);
  const selectedItem = items.find(item => item.id === coffeeItemId);

  const [showReadMore, setShowReadMore] = useState(
    selectedItem?.description
      ? selectedItem.description.length > DESCRIPTION_LENGTH
      : false,
  );

  const onRequestClose = () => {
    setShowReadMore(false);
    onClose();
  };

  return (
    <Modal
      presentationStyle="overFullScreen"
      visible={Boolean(coffeeItemId)}
      transparent
      animationType="slide"
      onRequestClose={onRequestClose}>
      <SafeAreaProvider>
        <SafeAreaView style={[gs.flex1, {backgroundColor: pallete.surface}]}>
          <AppBar
            onBackComponent={
              <TouchableOpacity onPress={onRequestClose}>
                <Image
                  source={arrowLeft}
                  style={[
                    styles.iconDimensions,
                    {tintColor: pallete.onSurface},
                  ]}
                />
              </TouchableOpacity>
            }
            actionComponent={
              <Image
                source={heartIcon}
                style={[styles.iconDimensions, {tintColor: pallete.onSurface}]}
              />
            }
            title={
              <Text
                style={[styles.titleTypography, {color: pallete.onSurface}]}>
                Details
              </Text>
            }
          />
          {selectedItem ? (
            <>
              <ScrollView style={[gs.flex1]}>
                <View style={[styles.imageContainer]}>
                  <Image
                    source={{uri: selectedItem.image_url}}
                    style={[styles.coffeeImage]}
                  />
                </View>
                <View style={[gs.row, gs.justifySpaceBetween, styles.ph31]}>
                  <View style={[gs.gap15]}>
                    <View style={[gs.gap8]}>
                      <Text
                        style={[
                          styles.labelText,
                          {color: pallete.secondaryTextLight},
                        ]}>
                        {selectedItem.name}
                      </Text>
                      <Text
                        style={[styles.subLabel, {color: pallete.bodyText}]}>
                        with Chocolate
                      </Text>
                    </View>
                    <View style={[gs.row, gs.gap4]}>
                      <Image
                        source={starIcon}
                        style={[styles.starIconDimensions]}
                      />
                      <Text
                        style={[
                          styles.ratingLabel,
                          {color: pallete.secondaryTextLight},
                        ]}>
                        {'4.8 '}
                        <Text
                          style={[
                            styles.ratingSubLabel,
                            {color: pallete.bodyTextVariant},
                          ]}>
                          (230)
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <View style={[gs.gap15, styles.rowFlexEnd]}>
                    <View style={[styles.iconContainer]}>
                      <Image source={beanIcon} />
                    </View>
                    <View style={[styles.iconContainer]}>
                      <Image source={milkIcon} />
                    </View>
                  </View>
                </View>
                <Divider style={[styles.divider]} />
                <View style={[styles.descriptionSectionContainer]}>
                  <Text
                    style={[
                      styles.subHeadings,
                      {color: pallete.secondaryTextLight},
                    ]}>
                    Description
                  </Text>
                  <View>
                    <Text
                      style={[
                        styles.descriptionBody,
                        {color: pallete.bodyText},
                      ]}>
                      {showReadMore
                        ? `${selectedItem.description
                            .split(' ')
                            .slice(0, DESCRIPTION_LENGTH)
                            .join(' ')}`
                        : selectedItem.description}
                    </Text>
                    {showReadMore ? (
                      <TouchableOpacity onPress={() => setShowReadMore(false)}>
                        <Text
                          style={[
                            styles.descriptionBody,
                            {color: pallete.primaryColor},
                          ]}>
                          Read more
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                </View>
                <View style={[styles.sizeSectionContainer]}>
                  <Text style={[styles.subHeadings]}>Size</Text>
                  <View style={[styles.sizeOptionsContainer]}>
                    {[
                      {label: 'S', id: 1},
                      {label: 'M', id: 2},
                      {label: 'L', id: 3},
                    ].map(v => (
                      <TouchableOpacity
                        onPress={() => setSelectedSize(v.id)}
                        key={v.id}
                        style={[
                          styles.sizesTag,
                          {
                            backgroundColor:
                              selectedSize === v.id
                                ? pallete.limestone
                                : pallete.surface,
                            borderColor:
                              selectedSize === v.id
                                ? pallete.primaryColor
                                : pallete.secondaryBorder,
                          },
                        ]}>
                        <Text
                          style={[
                            {
                              color:
                                selectedSize === v.id
                                  ? pallete.primaryColor
                                  : pallete.secondaryTextLight,
                            },
                          ]}>
                          {v.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </ScrollView>
              <View
                style={[
                  styles.footerContainer,
                  {borderColor: pallete.onSurface},
                ]}>
                <View style={[gs.gap8]}>
                  <Text
                    style={[
                      styles.soraRegular14,
                      {
                        color: pallete.bodyText,
                      },
                    ]}>
                    Price
                  </Text>
                  <Text
                    style={[
                      styles.soraSemiBold18,
                      {color: pallete.primaryColor},
                    ]}>
                    $ {selectedItem.price}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[
                    styles.footerButtonContainer,
                    {backgroundColor: pallete.primaryColor},
                  ]}>
                  <Text
                    style={[styles.soraSemiBold16, {color: pallete.surface}]}>
                    Buy Now
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View>
              <Text>Item not found</Text>
            </View>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

const Divider = (props: ViewProps) => {
  const pallete = usePallete();

  const dividerStyles = {
    backgroundColor: pallete.bodyDivider,
    height: 1,
  };

  return (
    <View style={[props.style]}>
      <View style={[dividerStyles]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconDimensions: {
    height: 24,
    width: 24,
  },
  starIconDimensions: {
    height: 20,
    width: 20,
  },
  titleTypography: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 18,
    textAlign: 'center',
  },
  imageContainer: {
    paddingHorizontal: 31,
    paddingVertical: 20,
  },
  labelText: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 20,
  },
  subLabel: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: 12,
  },
  ratingLabel: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  ratingSubLabel: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: 12,
  },
  iconContainer: {
    height: 44,
    width: 44,
    backgroundColor: availableSchemes.light.limestone,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  subHeadings: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  descriptionBody: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: 14,
  },
  sizesTag: {
    borderWidth: 1,
    paddingHorizontal: 44,
    paddingVertical: 10,
    borderRadius: 12,
  },
  coffeeImage: {
    height: 226,
    width: 'auto',
    borderRadius: 16,
    resizeMode: 'cover',
  },
  divider: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  descriptionSectionContainer: {
    paddingHorizontal: 30,
    gap: 15,
    paddingBottom: 22,
  },
  sizeSectionContainer: {paddingHorizontal: 30, gap: 12},
  sizeOptionsContainer: {
    paddingBottom: 12,
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'space-between',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    borderTopWidth: 1,
  },
  soraRegular14: {
    fontFamily: 'Sora-Regular',
    fontSize: 14,
  },
  soraSemiBold18: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 18,
  },
  soraSemiBold16: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  footerButtonContainer: {
    paddingHorizontal: 72,
    paddingVertical: 18,
    borderRadius: 16,
  },
  rowFlexEnd: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  ph31: {
    paddingHorizontal: 31,
  },
});
