import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.section}>
        <Text style={styles.label}>1. Novo Botão (Pressable)</Text>
        <Pressable 
          onPress={() => console.log('Pressable clicado')}
          style={({ pressed }) => [
            styles.baseBtn,
            styles.pressableBtn,
            {
              opacity: pressed ? 0.7 : 1,
              transform: [{ scale: pressed ? 0.97 : 1 }]
            }
          ]}
        >
          <Text style={styles.btnText}>Pressione-me</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>2. Botão Tradicional (TouchableOpacity)</Text>
        <TouchableOpacity 
          style={[styles.baseBtn, styles.touchableBtn]}
          activeOpacity={0.7}
        >
          <Text style={styles.btnText}>Pressione-me</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  baseBtn: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 3,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pressableBtn: {
    backgroundColor: '#6200ee',
  },
  touchableBtn: {
    backgroundColor: '#03dac6',
  },
});