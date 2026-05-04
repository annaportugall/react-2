import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Platform, 
  StatusBar 
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* StatusBar adaptada para combinar com o fundo do Header */}
      <StatusBar 
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="#6200ee" // Apenas Android respeita isso
      />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <View style={styles.content}>
        <Text>O cabeçalho acima muda de acordo com o sistema operacional.</Text>
        <Text style={styles.platformLabel}>
          Rodando em: <Text style={{fontWeight: 'bold'}}>{Platform.OS}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    ...Platform.select({
      ios: {
        backgroundColor: '#ffffff',
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center',      // Centraliza horizontalmente (iOS padrão)
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      android: {
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'flex-start',  // Alinha à esquerda (Android padrão)
        paddingHorizontal: 20,
        elevation: 4,
      },
      web: {
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }),
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        color: '#000',
      },
      android: {
        color: '#fff',
      },
      web: {
        color: '#00ff00',
      }
    }),
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  platformLabel: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  }
});