import { View, Text, TouchableOpacity } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['60%'], []);
  const renderBackdrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);
  const { dismiss } = useBottomSheetModal();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <BottomSheetModal
      handleIndicatorStyle={{ display: 'none' }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
          <TouchableOpacity style={{ backgroundColor: Colors.primary, padding: 8, borderRadius: 32, paddingHorizontal: 30 }}>
            <Text style={{ color: '#fff', fontWeight: '700' }}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 8, borderRadius: 32, paddingHorizontal: 30 }}>
            <Text style={{ color: Colors.primary }}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 16, fontWeight: '600', margin: 16 }}>Your Location</Text>
        <Link href={'/(modal)/location-search'} asChild>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: '#fff', padding: 16, borderColor: Colors.grey, borderWidth: 1 }}>
              <Ionicons name="location-outline" size={20} color={Colors.medium} />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={{ fontSize: 16, fontWeight: '600', margin: 16 }}>Arrival time</Text>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', backgroundColor: '#fff', padding: 16, borderColor: Colors.grey, borderWidth: 1 }}>
            <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: Colors.primary, padding: 16, margin: 16, borderRadius: 4, alignItems: 'center' }} onPress={() => dismiss()}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
    </GestureHandlerRootView>
  );
});

export default BottomSheet;
