import { Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Categories from '@/src/components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Restaurants from '../Components/Restaurants';
import Restaurants from '@/src/components/Restaurants';
import Colors from '@/src/constants/Colors';

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top:70 ,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
