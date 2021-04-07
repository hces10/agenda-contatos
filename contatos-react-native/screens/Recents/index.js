import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header, Menu } from '../../components';

export default function Recents({navigation}) {
  
  return (
    <View style={styles.container}>
      <Header showAdd />
      <Menu active='recents' navigation={navigation} />
    </View>
  );
}