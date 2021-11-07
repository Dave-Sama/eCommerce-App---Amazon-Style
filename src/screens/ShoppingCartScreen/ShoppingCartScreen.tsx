import React from 'react';
import {View, StyleSheet, FlatList, Text, ScrollView} from 'react-native';
import Button from '../../components/Button/Button';
import CartProductItem from '../../components/CartProductItem/CartProductItem';
import cartProducts from '../../data/cart';
import {useNavigation} from '@react-navigation/native';
const ShoppingCartScreen = () => {
  const navigation = useNavigation();
  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate('Address');
  };
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <FlatList
        data={cartProducts}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.totalSum}>
              Subtotal ({cartProducts.length} items):{' '}
              <Text style={styles.priceText}> ${totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
              text="Procced To Checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  totalSum: {
    fontWeight: 'bold',
  },
  priceText: {
    color: '#e47911',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ShoppingCartScreen;
