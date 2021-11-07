import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
  },
  price: {fontSize: 18, fontWeight: 'bold'},
  oldPrice: {
    fontSize: 14,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 19,
  },
  title: {},
});

export default styles;
