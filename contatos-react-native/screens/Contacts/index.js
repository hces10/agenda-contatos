import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { styles } from './styles';
import { Header, Menu, Info } from '../../components';
import { TextInput } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios';

export default function Contacts({ navigation }) {


  const [modalVisible, setModalVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => getData(), []);

  const getData = () => {
    const api = axios.create({
      baseURL: 'http://192.168.100.50:3333',
    });

    api.get('users').then(res => {
      setUsers(res.data);
    })
  }

  const saveUser = () => {
    const api = axios.create({
      baseURL: 'http://192.168.100.50:3333',
    });

    const data = { name, email };
    

    api.post('users', data).then(() => {
      getData();
    })

    setModalVisible(false);
    setName('');
    setEmail('');
  }

  return (
    <View style={styles.container}>
      <Modal
        style={styles.containerModal}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.containerModal}>
          <Text style={styles.text}>Telefone</Text>
          <View style={styles.image}>
            <View style={styles.circle}>
              <Entypo name="camera" size={24} color="white" />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder='Nome'
            placeholderTextColor='gray'
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder='Telefone'
            placeholderTextColor='gray'
            editable={false}
          />
          <TextInput
            style={styles.input}
            placeholder='E-mail'
            placeholderTextColor='gray'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />
          <TextInput
            style={styles.input}
            placeholder='Grupos'
            placeholderTextColor='gray'
            editable={false}
          />
        </View>
        <View style={styles.options}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.padding} onPress={() => setModalVisible(false)}>
              <Text style={styles.button}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.padding} onPress={() => saveUser()}>
              <Text style={styles.button}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Header add={() => setModalVisible(true)} showAdd />
      <ScrollView style={{ marginBottom: 70, maxHeight: '85%', borderRadius: 25 }} contentContainerStyle={styles.scroll}>
        {users.map(user => (
          <Info
            key={user.id}
            name={user.name}
            phone={user.email}
          />
        ))}
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
        <Info />
      </ScrollView>
      <Menu active='contacts' navigation={navigation} />
    </View>
  );
}