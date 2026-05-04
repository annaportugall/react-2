import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

// --- 1. Definição do Tema ---
const theme = {
  colors: {
    primary: '#6200ee',
    secondary: '#03dac6',
    background: '#f5f5f5',
    text: '#333',
    white: '#ffffff',
    caption: '#888',
  },
  fonts: {
    bold: 'bold',
    regular: 'normal',
  }
};

// --- 2. Typography ---
const H1 = styled.Text`
  font-size: 28px;
  font-weight: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 8px;
`;

const H2 = styled.Text`
  font-size: 20px;
  font-weight: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 4px;
`;

const Body = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;

const Caption = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.caption};
  text-transform: uppercase;
`;

// --- 3. Componentes de Interface ---

// Card com prop dinâmica $spacing
const Card = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  padding: ${(props) => props.$spacing || '16'}px;
  margin-bottom: 16px;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;

// --- 4. App Principal ---

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SafeAreaView>
          <ScrollView contentContainerStyle={{ padding: 20 }}>
            
            <H1>Design System</H1>
            <Caption>Styled Components</Caption>

            {/* Card com $spacing personalizado */}
            <Card $spacing={30}>
              <H2>Card Customizado</H2>
              <Body>
                Este card utiliza uma prop dinâmica para controlar o padding interno (30px).
              </Body>
              <Button activeOpacity={0.8}>
                <ButtonText>Ação do Card</ButtonText>
              </Button>
            </Card>

            {/* Card com $spacing padrão (fallback) */}
            <Card>
              <H2>Card Padrão</H2>
              <Body>Este card usa o padding padrão de 16px.</Body>
            </Card>

          </ScrollView>
        </SafeAreaView>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;