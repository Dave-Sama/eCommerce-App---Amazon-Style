import React from 'react';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Button from '../../components/Button/Button';
import {Auth} from 'aws-amplify';

const menuScreen = () => {
  const onLogOut = () => {
    Auth.signOut();
  };
  return (
    <SafeAreaView>
      <Button text="Sign Out" onPress={onLogOut} />
    </SafeAreaView>
  );
};

export default menuScreen;
