import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import useBasketStore from '@/src/store/basketStore';
import Colors from '@/src/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ConfettiCannon from 'react-native-confetti-cannon';
import { Link, useNavigation } from 'expo-router';
import SwipeableRow from '@/src/components/SwipeableRow';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp } from 'react-native-reanimated';


const Basket = () => {
  const { products, total, clearCart, reduceProduct } = useBasketStore();
  const [order, setOrder] = useState(false);
  const navigation  = useNavigation()

  const FEES = {
    service: 2.99,
    delivery: 5.99,
  };

  const startCheckout = () => {
    setOrder(true);
    clearCart();
  };

  return (
    <>
      {order && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fallSpeed={2500} fadeOut={true} autoStart={true} />}
      {order && (
        <View style={{ marginTop: '50%', padding: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Thank you for your order!</Text>
          <Link href={'/'} asChild>
            <TouchableOpacity style={styles.orderBtn}>
              <Text style={styles.footerText}>New order</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
      {!order && (
        <SafeAreaView style={{backgroundColor: '#fbcd99'}}>
          
          <FlatList
            data={products}
            ListHeaderComponent={<View style={{flexDirection: 'column', padding: 10, gap: 4 }}>
              <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="chevron-back-outline" style={{color:'black'}}  size={24} color={Colors.primary} />

              </TouchableOpacity>
                <Ionicons name="cart-outline" size={24} style={{color:'black'}} color={Colors.primary} />
              </View>
              <Text style={{fontSize: 24, fontWeight:'800', color:'black', paddingHorizontal: 10}}> My Order</Text>

            </View>}
            ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: Colors.grey }} />}
            renderItem={({ item, index }) => (
              <>
              {index === 0 &&
              <>
                
              <View style={{  borderTopLeftRadius: 40,  borderTopRightRadius: 40, flexDirection: 'column', backgroundColor: '#fff', paddingTop: 40,}}>
                <View style={{flexDirection: 'column', gap: 1}}>
                  <Text style={{fontWeight: 800, fontSize: 20}}> "Store Title" </Text>
                  <Text style={{fontWeight: 400, fontSize: 14, color:'gray'}}> "Store's address" </Text>
                </View>
                <SwipeableRow  onDelete={() => reduceProduct(item)}>
                  <View style={{   flexDirection: 'row', backgroundColor: '#fff', padding: 10, paddingTop: 20,  justifyContent: 'space-between'}}>
                    <Animated.Image entering={FadeIn.duration(400).delay(200)} source={item?.img} style={{width: 70, borderRadius: 20, aspectRatio: 1}} />
                    <View style={{flexDirection: 'column'}}>
                      {/* <Text style={{ color: Colors.primary, fontSize: 18 }}>{item.quantity}x</Text> */}
                      <Text style={{ flex: 1, fontSize: 18, fontWeight: 700 }}>{item.name}</Text>
                      <View style={{flexDirection: 'row', gap: 4}}>
                        <View style={{flexDirection: 'row',  width: 40,  borderRadius: 10, borderColor: 'green', borderWidth:0.5, padding: 4 , justifyContent:'center', gap: 4, alignItems:'center'}}>
                          <Ionicons name="ticket-outline" size={24} style={{color:'green'}} color={'green'} />

                          <Text style={{fontSize: 10, fontWeight: 200}}></Text>
                        </View>
                        <View style={{flexDirection: 'row',  width: 40,  borderRadius: 10, borderColor: 'green', borderWidth:0.5, padding: 4 , justifyContent:'center', gap: 4, alignItems:'center'}}>
                          <Ionicons name="stopwatch-outline" size={24} style={{color:'green'}} color={'green'} />

                          <Text style={{fontSize: 10, fontWeight: 200}}></Text>
                        </View>
                      </View>

                      
                      
                      
                    </View>
                    <View style={{flexDirection: 'column', gap: 4, alignItems: 'center'}}>
                      <Text style={{ fontSize: 18, fontWeight: 700, color:'green' }}>đ{item.price * item.quantity}.000 
                      {/* <Ionicons name="golf-outline" size={18} style={{color:'green', marginHorizontal: 30}} color={'green'} /> */}
                      </Text>
                      <View style={{flexDirection: 'row', padding: 10, alignSelf: 'center',  borderRadius: 10, borderBlockColor: 'gray', }}>
                          <FontAwesome
                            // onPress={() => updateQuantity(cartItem.id, -1)}
                            name="minus"
                            color="gray"
                            style={{ padding: 5,  fontSize: 10, borderColor: 'gray', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderWidth:0.5 }}
                          />
                          <Text style={{ borderColor: 'gray', paddingHorizontal: 10,  borderWidth: 0.5 }}>{item.quantity}</Text>

                          <FontAwesome
                            // onPress={() => updateQuantity(cartItem.id, 1)}
                            name="plus"
                            color="gray"
                            style={{ padding: 5,  fontSize: 10, borderBlockColor: 'gray', borderTopRightRadius: 4, borderBottomRightRadius: 4,  borderWidth:0.5 }}
                          />
                      </View>
                    </View>
                  </View>
              </SwipeableRow>
                </View>
              </>  
              
              }
              {index !== 0 &&  
              <SwipeableRow  onDelete={() => reduceProduct(item)}>
              <View style={{   flexDirection: 'row', backgroundColor: '#fff', padding: 10, paddingTop: 20,  justifyContent: 'space-between'}}>
                <Animated.Image entering={FadeIn.duration(400).delay(200)} source={item?.img} style={{width: 70, borderRadius: 20, aspectRatio: 1}} />
                <View style={{flexDirection: 'column'}}>
                  {/* <Text style={{ color: Colors.primary, fontSize: 18 }}>{item.quantity}x</Text> */}
                  <Text style={{ flex: 1, fontSize: 18, fontWeight: 700 }}>{item.name}</Text>
                  <View style={{flexDirection: 'row', width: 40, borderRadius: 10, borderColor: 'green', borderWidth:0.5, padding: 4 , justifyContent:'center', gap: 4, alignItems:'center'}}>
                    <Ionicons name="ticket-outline" size={24} style={{color:'green'}} color={'green'} />
                    <Text style={{fontSize: 10, fontWeight: 200}}></Text>
                  </View>
                  
                </View>
                <View style={{flexDirection: 'column', gap: 4, alignItems: 'center'}}>
                  <Text style={{ fontSize: 18, fontWeight: 700, color:'green' }}>đ{item.price * item.quantity}.000 
                  {/* <Ionicons name="golf-outline" size={18} style={{color:'green', marginHorizontal: 30}} color={'green'} /> */}
                  </Text>
                  <View style={{flexDirection: 'row', padding: 10, alignSelf: 'center',  borderRadius: 10, borderBlockColor: 'gray', }}>
                      <FontAwesome
                        // onPress={() => updateQuantity(cartItem.id, -1)}
                        name="minus"
                        color="gray"
                        style={{ padding: 5,  fontSize: 10, borderColor: 'gray', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, borderWidth:0.5 }}
                      />
                      <Text style={{ borderColor: 'gray', paddingHorizontal: 10,  borderWidth: 0.5 }}>{item.quantity}</Text>

                      <FontAwesome
                        // onPress={() => updateQuantity(cartItem.id, 1)}
                        name="plus"
                        color="gray"
                        style={{ padding: 5,  fontSize: 10, borderBlockColor: 'gray', borderTopRightRadius: 4, borderBottomRightRadius: 4,  borderWidth:0.5 }}
                      />
                  </View>
                </View>
              </View>
          </SwipeableRow>
              
              }
              </>
            )}
            ListFooterComponent={
              <View>
                <View style={{ height: 1, backgroundColor: Colors.grey }}></View>
                <View style={styles.totalRow}>
                  <Text style={styles.total}>Subtotal</Text>
                  <Text style={{ fontSize: 18, fontWeight:700, color:'green' }}>đ{total}.000</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Service fee</Text>
                  <View style={{flexDirection: 'row', borderRadius: 10, borderColor: 'green', borderWidth:0.5, padding: 4 , justifyContent:'center', gap: 4, alignItems:'center'}}>
                    <Ionicons name="golf-outline" size={24} style={{color:'green'}} color={'green'} />
                    <Text style={{fontSize: 10, fontWeight: 200}}>"Free delivery"</Text>
                  </View>
                  {/* <Ionicons name="" size={18} style={{color:'green', marginHorizontal: 30}} color={'green'} /> */}
                  <Text style={{ fontSize: 18, color:'gray' }}>đ0.00</Text>

                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Delivery fee</Text>
                  <Text style={{ fontSize: 18 }}>${FEES.delivery}</Text>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.total}>Order Total</Text>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>${(total + FEES.service + FEES.delivery).toFixed(2)}</Text>
                </View>
              </View>
            }
          />

          <View style={styles.footer}>
            <SafeAreaView edges={['bottom']} style={{ backgroundColor: '#fff' }}>
              <TouchableOpacity style={styles.fullButton} onPress={startCheckout}>
                <Text style={styles.footerText}>Order now</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    gap: 20,
    alignItems: 'center',
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  total: {
    fontSize: 18,
    color: Colors.medium,
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Basket;
