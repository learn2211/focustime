import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from '../components/RoudedButton'
import {spacing} from '../utils/sizes'

export const Focus = ({updateSubject}) => {
  const [subject, setSubject] = useState(null);
  return(
  <View style={styles.container}>
    <View style = {styles.inputContainer}>
      <TextInput 
      style = {styles.textInput}
      onChangeText ={(val) => setSubject(val)} 
      label="what would you like to focus?" />
      <View style ={styles.button}>
      <RoundedButton onPress = {() => updateSubject(subject)} title ='+' size ={50}/>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  textInput:{
    flex:1,
    marginRight:spacing.sm
  },
  button:{
    justifyContent:'center'
  },
  text: {
    color: colors.white,
  },
});
