import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '@/src/components/CostumHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Colors from '@/src/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
      <Stack screenOptions={{
        // header: () => <CustomHeader />,
      }} >
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal', // For animation.
            headerTitle: 'Filter',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/location-search"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select location',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        {/* 
        <Stack.Screen
          name="(modal)/dish"
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,

            headerLeft: () => (
              <TouchableOpacity
                style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="basket"
          options={{
            headerTitle: 'Basket',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="arrow-back" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        /> */}
      </Stack>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
