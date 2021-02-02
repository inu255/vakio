import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Page(props) {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate(props.navTo)
        }}>
          <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    },
  
    button: {
      backgroundColor: '#434343',
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 40
    },
  
    buttonText: {
      color: '#ffffff'
    }
  })

export default Page;