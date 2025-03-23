import {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FilterPills, PromoBanner} from '../components';
import {CoffeeListCard} from '../components/CoffeeListCard';
import {ProfilePicture} from '../components/ProfilePicture';
import {SearchBar} from '../components/SearchBar';
import {StatusBarWrapper} from '../components/StatusBarWrapper';
import {availableSchemes} from '../global/colorSchemes';
import {gs} from '../global/styles';
import {usePallete} from '../hooks/usePallete';
import {useCoffeeItemsStore} from '../store/useCoffeeStore';
import {useUserProfileStore} from '../store/userProfileStore';
import {CoffeeDetailScreen} from './CoffeeDetailScreen';

const screenWidth = Dimensions.get('screen').width;

export const HomeScreen = () => {
  return (
    <>
      <StatusBarWrapper />
      <CoffeeListScreen />
    </>
  );
};

const CoffeeListScreen = () => {
  const pallete = usePallete();
  const insets = useSafeAreaInsets();
  const userProfileStore = useUserProfileStore();
  const [coffeeItemId, setCoffeeItemId] = useState<number | null>(null);

  return (
    <View style={[gs.flex1, {backgroundColor: pallete.secondaryColor}]}>
      <LinearGradient
        style={[styles.linearGradientContainer]}
        colors={['rgba(19,19,19,1)', 'rgba(49,49,49,1)']}
      />
      <View style={[gs.flex1, {paddingTop: insets.top}]}>
        <View style={[gs.row, gs.justifySpaceBetween, styles.topBarContainer]}>
          <View style={[styles.gap2]}>
            <Text style={[styles.locationLabel]}>Location</Text>
            <Text style={[styles.location]}>Bilzen,Tanjungbalai</Text>
          </View>
          <ProfilePicture uri={userProfileStore.userProfile?.photoUrl} />
        </View>
        <SearchBarWrapper />
        <View style={[styles.promoBannerContainer]}>
          <PromoBanner />
        </View>
        <View style={[styles.mb17]}>
          <FilterPillsWrapper />
        </View>
        <CoffeeList setCoffeeItemId={setCoffeeItemId} />
        {coffeeItemId && (
          <CoffeeDetailScreen
            coffeeItemId={coffeeItemId}
            onClose={() => setCoffeeItemId(null)}
          />
        )}
      </View>
    </View>
  );
};

const FilterPillsWrapper = () => {
  const staticOptions = [
    {id: 1, label: 'Cappuccino'},
    {id: 2, label: 'Machiato'},
    {id: 3, label: 'Latte'},
    {id: 4, label: 'Americano'},
  ];

  const [selectedId, setSelectedId] = useState(staticOptions[0].id);

  const FilterPillsSeperator = useMemo(() => {
    return () => <View style={[styles.w7]} />;
  }, []);

  return (
    <FlatList
      data={staticOptions}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={FilterPillsSeperator}
      style={[styles.filterContainer]}
      renderItem={info => (
        <FilterPills
          isSelected={info.item.id === selectedId}
          label={info.item.label}
          onPress={() => setSelectedId(info.item.id)}
        />
      )}
    />
  );
};

const SearchBarWrapper = () => {
  const {filterString, setFilterString} = useCoffeeItemsStore();
  return (
    <View style={[styles.searchBarContainer]}>
      <SearchBar
        filterString={filterString}
        setFilterString={setFilterString}
      />
    </View>
  );
};

const CoffeeList = ({
  setCoffeeItemId,
}: {
  setCoffeeItemId: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const pallete = usePallete();
  const {items, loading, fetchItems, filterString} = useCoffeeItemsStore();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <FlatList
      data={items.filter(item =>
        item.name.toLowerCase().includes(filterString.toLowerCase()),
      )}
      ListEmptyComponent={() => (
        <View style={{marginTop: 20}}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <Text style={{color: pallete.onSurface, textAlign: 'center'}}>
              No items available
            </Text>
          )}
        </View>
      )}
      style={[styles.ph38]}
      renderItem={info => (
        <CoffeeListCard
          name={info.item.name}
          price={info.item.price}
          image_url={info.item.image_url}
          rating={4.8}
          onPress={() => setCoffeeItemId(info.item.id)}
          cardWidth={Math.floor((screenWidth - 38 * 2) / 2 - 5)}
        />
      )}
      numColumns={2}
      contentContainerStyle={[gs.gap9]}
      columnWrapperStyle={[gs.gap5]}
    />
  );
};

const styles = StyleSheet.create({
  linearGradientContainer: {
    height: 270,
    width: '100%',
    position: 'absolute',
  },
  locationLabel: {
    fontFamily: 'Sora',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: -0.24,
    color: availableSchemes.light.surface,
  },
  location: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 14,
    color: availableSchemes.light.secondaryTextDark,
  },
  topBarContainer: {
    paddingHorizontal: 30,
    paddingVertical: 18,
  },
  searchBarContainer: {paddingHorizontal: 20, marginBottom: 26},
  gap2: {
    gap: 2,
  },
  promoBannerContainer: {
    paddingHorizontal: 20,
  },
  filterContainer: {
    paddingLeft: 29,
    paddingTop: 25,
  },
  mb17: {marginBottom: 17},
  ph38: {paddingHorizontal: 38},
  w7: {
    width: 7,
  },
});
