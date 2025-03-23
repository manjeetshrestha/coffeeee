import {
  createBottomTabNavigator,
  SceneStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/bottom-tabs';
import {Easing, Image, ImageSourcePropType} from 'react-native';
import {
  bagIcon,
  heartHalfFilledIcon,
  homeIcon,
  notificationIcon,
} from '../assets';
import {availableSchemes} from '../global/colorSchemes';
import {usePallete} from '../hooks/usePallete';
import {DummyScreen, HomeScreen} from '../screens';

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
  const pallete = usePallete();

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: pallete.surface,
        },
        tabBarActiveTintColor: availableSchemes.light.primaryColor,
        tabBarInactiveTintColor: availableSchemes.light.lightGray,
        transitionSpec: TransitionSpecs.FadeSpec,
        sceneStyleInterpolator: SceneStyleInterpolators.forFade,
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => (
            <TabBarIcons source={homeIcon} tintColor={props.color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tabs.Screen
        name="Heart"
        component={DummyScreen}
        options={{
          tabBarIcon: props => (
            <TabBarIcons source={heartHalfFilledIcon} tintColor={props.color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tabs.Screen
        name="Bag"
        component={DummyScreen}
        options={{
          tabBarIcon: props => (
            <TabBarIcons source={bagIcon} tintColor={props.color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
      <Tabs.Screen
        name="Notification"
        component={DummyScreen}
        options={{
          tabBarIcon: props => (
            <TabBarIcons source={notificationIcon} tintColor={props.color} />
          ),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 150,
              easing: Easing.inOut(Easing.ease),
            },
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const TabBarIcons = ({
  source,
  tintColor,
}: {
  source: ImageSourcePropType;
  tintColor: string;
}) => {
  return <Image source={source} style={{top: 8}} tintColor={tintColor} />;
};
