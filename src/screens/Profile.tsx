import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as wpActions from '../redux/actions';
import Toast from 'react-native-simple-toast';

export default function Profile(props: any) {
    const data = useSelector((state: any) => state.appData);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('');


  const onPressSubmit = () => {
    dispatch(wpActions.saveName(name));
    dispatch(wpActions.saveEmail(email));
    dispatch(wpActions.savePhone(phone));
    dispatch(wpActions.saveAddress(address));
    dispatch(wpActions.saveDesignation(designation));
    Toast.show('Data submitted successfully!',Toast.LONG);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={val => setName(val)}
        style={styles.inputStyle}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={val => setEmail(val)}
        style={styles.inputStyle}
      />

      <TextInput
        placeholder="Phone"
        value={phone}
        keyboardType="numeric"
        maxLength={10}
        onChangeText={val => setPhone(val)}
        style={styles.inputStyle}
      />

      <TextInput
        placeholder="Address"
        value={address}
        multiline={true}
        numberOfLines={3}
        onChangeText={val => setAddress(val)}
        style={styles.inputStyle}
      />

      <TextInput
        placeholder="Designation"
        value={designation}
        onChangeText={val => setDesignation(val)}
        style={styles.inputStyle}
      />

      <TouchableOpacity
        onPress={onPressSubmit}
        style={{...styles.buttonStyle, backgroundColor: '#6E85F7', width: 100}}>
        <Text style={styles.buttonTitleStyle}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Details')}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTitleStyle}>Go To Details </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonStyle: {
    backgroundColor: '#8CC177',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonTitleStyle: {color: 'white', fontSize: 16, fontWeight: '600'},
});
