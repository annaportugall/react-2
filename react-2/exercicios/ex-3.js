import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  // Criamos uma lista de 9 itens para o grid
  const [items, setItems] = useState(Array(9).fill('#ffffff'));

  const handlePress = (index) => {
    const newItems = [...items];
    // Gera uma cor aleatória ao clicar
    newItems[index] = '#' + Math.floor(Math.random()*16777215).toString(16);
    setItems(newItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Grid de Ícones 3x3</Text>
      
      <View style={styles.grid}>
        {items.map((color, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.cell, { backgroundColor: color }]}
            onPress={() => handlePress(index)}
            activeOpacity={0.7}
          >
            <Text style={styles.iconText}>📦</Text>
            <Text style={styles.itemNumber}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    width: '90%', // Ocupa quase toda a largura da tela
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que os itens "quebrem" para a próxima linha
    justifyContent: 'center',
  },
  cell: {
    width: '31%', // Pouco menos de 33.33% para dar espaço para a margem
    aspectRatio: 1, // Faz a célula ser um quadrado perfeito
    margin: '1%', // Pequeno espaçamento entre as células
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3, // Sombra Android
    shadowColor: '#000', // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconText: {
    fontSize: 30,
  },
  itemNumber: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});