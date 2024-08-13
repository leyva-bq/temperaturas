import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [number, onChangeNumber] = useState('');
  const { onPress, title = 'Convert' } = useState();

  return (
    <SafeAreaView>
      <Text style={styles.title}>Celcius to Farenheit converter</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Celcius"
        keyboardType="numeric"
      />
      <Text>{number}</Text>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text stlye={styles.buttonText}>{title}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 5,
    borderWidth: 1,
    padding: 10
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
