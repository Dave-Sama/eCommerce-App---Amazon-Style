import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './stylesAddressScreen';
import countryList from 'country-list';
import Button from '../../components/Button/Button';
import SweetAlert from 'react-native-sweet-alert';

const countries = countryList.getData();
const AddressScreen = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('Invalid Address');
  const [city, setCity] = useState('');
  console.log(fullName);
  const [country, setCountry] = useState(countries[0].code);

  const message = (title, subTitle, style) => {
    SweetAlert.showAlertWithOptions({
      title: title,
      subTitle: subTitle,
      confirmButtonTitle: 'OK',
      confirmButtonColor: '#000',
      otherButtonTitle: 'Cancel',
      otherButtonColor: '#dedede',
      style: style,
      cancellable: true,
    });
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short.');
    }
    if (address.length > 10) {
      setAddressError('Address is too long.');
    }
  };

  

  const onCheckout = () => {
    if (addressError) {
      Alert.alert('Fix all fields error before submiting.');
      return;
    }
    if (!fullName) {
      message(
        'Something went wrong',
        'Please fill in the Full-name field',
        'warning',
      );
      return;
    }
    if (!phone) {
      message(
        'Something went wrong',
        'Please fill in the Phone field',
        'warning',
      );
      return;
    }
    if (!address) {
      message(
        'Something went wrong',
        'Please fill in the Address field',
        'warning',
      );
      return;
    }
    if (!city) {
      message(
        'Something went wrong',
        'Please fill in the City field',
        'warning',
      );
      return;
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map(country => (
              <Picker.Item
                value={country.code}
                label={country.name}
                key={country.name}
              />
            ))}
          </Picker>
        </View>
        {/* Full Name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        {/* Phone Number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            value={phone}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
          />
        </View>
        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {!!addressError && (
            <Text style={styles.errorLabel}>{addressError}</Text>
          )}
        </View>
        {/* City */}

        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter City"
            value={city}
            onChangeText={setCity}
          />
        </View>
        <Button text="Check Out" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
