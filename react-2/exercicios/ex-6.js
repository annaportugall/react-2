import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  useWindowDimensions 
} from 'react-native';

export default function App() {
  // Captura largura e altura da janela em tempo real
  const { width, height } = useWindowDimensions();

  // Define se está em modo Paisagem (Landscape)
  const isLandscape = width > height;

  // Cálculo dinâmico: 
  // Em Portrait: 1 coluna (quase 100% da largura)
  // Em Landscape: 2 colunas (quase 50% da largura)
  const cardWidth = isLandscape ? (width / 2) - 30 : width - 40;

  // Criamos uma lista fictícia de 6 cards
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoBar}>
        <Text style={styles.infoText}>
          Modo: {isLandscape ? 'Landscape (2 Colunas)' : 'Portrait (1 Coluna)'}
        </Text>
        <Text style={styles.infoText}>Largura: {Math.round(width)}px</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          {cards.map((item) => (
            <View 
              key={item} 
              style={[styles.card, { width: cardWidth }]}
            >
              <View style={styles.cardImagePlaceholder} />
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Card Item {item}</Text>
                <Text style={styles.cardSubtitle}>
                  Este card se ajusta ao tamanho da tela.
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecef',
  },
  infoBar: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  scrollContent: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15, // Espaçamento moderno entre itens
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImagePlaceholder: {
    height: 120,
    backgroundColor: '#6200ee',
  },
  cardBody: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});