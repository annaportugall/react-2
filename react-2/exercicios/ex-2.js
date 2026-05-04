import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header Fixo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu App Flexbox</Text>
      </View>

      {/* Conteúdo com flex: 1 (ocupa todo o espaço restante) */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
          vasco da gama
        </Text>
      </View>

      {/* Botão no rodapé com position absolute */}
      <TouchableOpacity style={styles.footerButton} activeOpacity={0.7}>
        <Text style={styles.buttonText}>+ Adicionar Item</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a SafeAreaView ocupar a tela toda
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Espaço para não bater no entalhe do celular
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1, // Essencial: Preenche o espaço entre o header e o final da tela
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  footerButton: {
    position: 'absolute', // Remove o elemento do fluxo normal do Flexbox
    bottom: 30,           // Distância do fundo
    right: 20,            // Distância da direita
    backgroundColor: '#03dac6',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    elevation: 5,         // Sombra Android
    shadowColor: '#000',  // Sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});