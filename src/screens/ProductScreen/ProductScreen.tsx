import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import styles from './stylesProductScreen';
import product from '../../data/product';
import {useRoute} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Button from '../../components/Button/Button';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const ProductScreen = () => {
  const route = useRoute();
  
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/* image courusel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        From ${product.price}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>{product.oldPrice}$ </Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Button */}
      <Button text={'Add To Cart'} onPress={() => {}} />
      <Button text={'Buy Now'} onPress={() => {}} />
    </ScrollView>
  );
};

export default ProductScreen;
