import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header, Menu } from '../../components';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export default function Keyboard({navigation}) {
  const [value, setValue] = useState('');

  const renderNumbers = (number, description, icon) => (
    <TouchableOpacity onPress={() => setValue(value + number)} style={styles.numberContainer}>
      <Text style={styles.number}>{number}</Text>
      {icon || <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Header value={value} />
      <View style={styles.inputContainer}>
        <TextInput editable={false} style={styles.input} value={value} />
      </View>
      <View style={styles.grid}>
        <View style={styles.row}>
          {renderNumbers(1, '', <Feather name="voicemail" size={15} color="gray" />)}
          {renderNumbers(2, 'ABC')}
          {renderNumbers(3, 'DEF')}
        </View>

        <View style={styles.row}>
          {renderNumbers(4, 'GHI')}
          {renderNumbers(5, 'JKL')}
          {renderNumbers(6, 'MNO')}
        </View>

        <View style={styles.row}>
          {renderNumbers(7, 'PQRS')}
          {renderNumbers(8, 'TUV')}
          {renderNumbers(9, 'WXYZ')}
        </View>

        <View style={styles.row}>
          {renderNumbers('*', '')}
          {renderNumbers(0, '', <Feather name="plus" size={10} color="gray" />)}
          {renderNumbers('#', '')}
        </View>
      </View>

      <View style={[styles.buttons,{justifyContent: value ? 'space-between' : 'center'}]}>
        {value ?
          <View style={styles.video}>
            <FontAwesome name="video-camera" size={15} color="black" />
          </View>
          : <></>
        }
        <View style={styles.phone}>
          <FontAwesome name="phone" size={32} color="white" />
        </View>
        {value ?
          <TouchableOpacity onPress={() => setValue(value.slice(0, -1))}>
            <FontAwesome5 name="backspace" size={25} color="white" />
          </TouchableOpacity>
          : <></>
        }
      </View>

      <Menu active='keyboard' navigation={navigation} />

    </View>
  );
}