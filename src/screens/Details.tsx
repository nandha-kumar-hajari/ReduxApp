import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Details = () => {
  const data = useSelector(state => state.appData);

  return (
    <View>
      <View style={styles.textViewStyle}>
        <Text style={styles.labelStyle}>Name</Text>
        <Text style={styles.seperatorStyle}>:</Text>
        <Text style={styles.valueStyle}>{data?.userName}</Text>
      </View>

      <View style={styles.textViewStyle}>
        <Text style={styles.labelStyle}>Email</Text>
        <Text style={styles.seperatorStyle}>:</Text>
        <Text style={styles.valueStyle}>{data?.emailId}</Text>
      </View>

      <View style={styles.textViewStyle}>
        <Text style={styles.labelStyle}>Phone</Text>
        <Text style={styles.seperatorStyle}>:</Text>
        <Text style={styles.valueStyle}>{data?.phone}</Text>
      </View>

      <View style={styles.textViewStyle}>
        <Text style={styles.labelStyle}>Address</Text>
        <Text style={styles.seperatorStyle}>:</Text>
        <Text style={styles.valueStyle}>{data?.address}</Text>
      </View>

      <View style={styles.textViewStyle}>
        <Text style={styles.labelStyle}>Designation</Text>
        <Text style={styles.seperatorStyle}>:</Text>
        <Text style={styles.valueStyle}>{data?.designation}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  textViewStyle: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  labelStyle: {
    fontSize: 15,
    color: '#24272D',
    width: 100,
  },

  seperatorStyle: {
    fontSize: 17,
    color: '#24272D',
    fontWeight: '600',
    width: 20,
  },
  valueStyle: {fontSize: 16, color: '#000', fontWeight: '600', width: 200},
});
