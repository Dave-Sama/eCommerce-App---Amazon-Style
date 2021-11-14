import React, {useState, useEffect} from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import styles from './stylesProductScreen';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import {DataStore, Auth} from 'aws-amplify';
import {Product, CartProduct} from '../../models';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const route = useRoute();

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id)
      .then(setProduct)
      .catch(err => console.log(err));
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  if (!product) {
    return <ActivityIndicator />;
  }

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    if (!product || !userData) {
      return;
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id,
    });

    DataStore.save(newCartProduct);
  };

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* image courusel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      <Picker
        accessibilityLabel={'gender'}
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        From ${product.price.toFixed(2)}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>{product.oldPrice.toFixed(2)}$ </Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button text={'Add To Cart'} onPress={onAddToCart} />
      <Button text={'Buy Now'} onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductScreen;
