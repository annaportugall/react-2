import React, { createContext, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  useColorScheme, 
  StatusBar,
  Pressable
} from 'react-native';

// 1. Definição das paletas de cores
const lightColors = {
  background: '#FFFFFF',
  surface: '#F5F5F5',
  text: '#121212',
  primary: '#6200EE',
  description: '#666666'
};

const darkColors = {
  background: '#121212',
  surface: '#1E1E1E',
  text: '#FFFFFF',
  primary: '#BB86FC',
  description: '#AAAAAA'
};

// 2. Criando o Contexto do Tema
const ThemeContext = createContext();

export default function App() {
  // Captura o tema do sistema operacional (light ou dark)
  const deviceTheme = useColorScheme(); 
  const theme = deviceTheme === 'dark' ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={theme}>
      <StatusBar 
        barStyle={deviceTheme === 'dark' ? 'light-content' : 'dark-content'} 
      />
      <HomeScreen />
    </ThemeContext.Provider>
  );
}

// 3. Componente de Exemplo que consome o Tema
function HomeScreen() {
  // Hook customizado para acessar o tema em qualquer componente
  const theme = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.surface }]}>
        <Text style={[styles.title, { color: theme.primary }]}>
          Tema: {useColorScheme() === 'dark' ? 'Escuro' : 'Claro'}
        </Text>
        
        <Text style={[styles.text, { color: theme.text }]}>
          Este aplicativo detecta automaticamente a preferência do seu sistema.
        </Text>

        <Pressable style={[styles.button, { backgroundColor: theme.primary }]}>
          <Text style={styles.buttonText}>Entendido</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 25,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});