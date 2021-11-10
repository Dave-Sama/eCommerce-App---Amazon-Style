import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/ProductScreen/ProductScreen';
import {Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}
const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{height: 60, backgroundColor: '#7abcbf'}}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 10,
          flexDirection: 'row',
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#f2feff',
            padding: 5,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#d0dadb',
            marginHorizontal: 5,
          }}>
          <Feather name="search" size={20} />
        </View>
        <TextInput
          style={{
            height: 40,
            marginLeft: 10,
          }}
          placeholder="Search..."
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'home'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
