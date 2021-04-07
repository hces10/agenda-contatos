import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function Info({name, phone}) {
  const [active, setActive] = useState(false);

  const randomColor = () => {
    let number = String(Math.random());
    number = number.slice(3, 9);
    return number
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setActive(!active)} style={styles.row}>
          <View style={[styles.personLogo, { backgroundColor: `#${randomColor()}` }]}>
            <Text style={styles.character}>{name ? name.slice(0,1) : 'A'}</Text>
          </View>

          <Text style={styles.name}>{name || 'Ana Fulana'}</Text>
        </TouchableOpacity>
        {active ?
          <View style={styles.collapse}>
            <Text style={styles.phone}>{phone || 'Celular 16993179412'}</Text>
            <View style={styles.icons}>
              <View style={[styles.circle, {backgroundColor: 'green'}]}>
                <Ionicons name="call" size={24} color="white" />
              </View>
              <View style={[styles.circle, {backgroundColor: 'cyan'}]}>
                <Ionicons name="chatbox" size={24} color="white" />
              </View>
              <View style={[styles.circle, {backgroundColor: 'blue'}]}>
                <Ionicons name="videocam" size={24} color="white" />
              </View>
              <View style={[styles.circle, {backgroundColor: 'gray'}]}>
                <Ionicons name="information-circle" size={24} color="white" />
              </View>
            </View>
          </View>
          : <></>}
      </View>
      <View style={styles.separator} />
    </>
  );
}