import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export default function Menu({navigation, active}) {

  const changeScreen = key => {
    navigation.navigate(`${key}`);
  }

  const renderMenus = (text, key) => (
    <TouchableOpacity onPress={() => changeScreen(key)}>
      <Text style={active === key ? styles.textActive : styles.textMenu}>{text}</Text>
      {key === active ? <View style={styles.border} /> : <></>}
    </TouchableOpacity>
  )


  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {renderMenus('Teclado', 'keyboard')}
        {renderMenus('Recentes', 'recents')}
        {renderMenus('Contatos', 'contacts')}
        {renderMenus('Locais', 'locals')}
      </View>
  </View>
  );
}