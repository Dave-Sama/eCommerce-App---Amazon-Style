import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    marginTop: 3,
    marginLeft: 5,
    borderRadius: 4,
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  title: {fontSize: 18},
  price: {fontSize: 18, fontWeight: 'bold'},
  rightContainer: {padding: 10, flex: 3},
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 1.3,
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  quantityContainer: {
    marginLeft: 12,
    marginVertical: 10,
  },
});

export default styles;
