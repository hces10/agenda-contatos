import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Header, Menu } from '../../components';

export default function Locals({navigation}) {
  
  return (
    <View style={styles.container}>
      <Header showAdd />
      <Menu active='locals' navigation={navigation} />
    </View>
  );
}