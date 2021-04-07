import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';

export default function Header({value, showAdd, add}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Telefone</Text>
      <View style={styles.icons}>
        {value || showAdd ?
          <TouchableOpacity style={{ width: 30 }} onPress={add || null}>
            <Ionicons name="add" size={30} color="white" />
          </TouchableOpacity>
          : <View style={{ height: 22, width: 22 }} />
        }
        <Ionicons name="search-outline" size={22} color="white" />
        <Ionicons name="ellipsis-vertical-sharp" size={18} color="white" />
      </View>
    </View>
  );
}

