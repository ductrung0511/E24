import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheet from './BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const SearchBar = () => (
  <View style={{ height: 60, backgroundColor: '#fff' }}>
    <View style={{ flexDirection: 'row', gap: 10, flex: 1, paddingHorizontal: 20, alignItems: 'center' }}>
      <View style={{ flex: 1, backgroundColor: Colors.lightGrey, borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons style={{ paddingLeft: 10 }} size={20} color={Colors.medium} name="search" />
        <TextInput style={{ padding: 10, color: Colors.mediumDark }} placeholder="Restaurants, groceries, dishes" />
      </View>
      <Link href={'/(modal)/filter'} asChild>
        <TouchableOpacity style={{ padding: 10, borderRadius: 50 }}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    console.log('open bottomsheet')
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20, }}>
      <BottomSheet ref={bottomSheetRef} />

      <View style={{ height: 60, backgroundColor: '#fff', flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={openModal}>
          <Image style={{ width: 30, height: 30 }} source={require('@/assets/images/bike.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1 }} onPress={openModal}>
          <Text style={{ fontSize: 14, color: Colors.medium }}>Delivery · Now</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>London</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: Colors.lightGrey, padding: 10, borderRadius: 50 }}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default CustomHeader;
