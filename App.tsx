import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from '@theme/index';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { Home } from '@pages/Home';
import { Loading } from '@components/Loading/Index';
import { NewGroup } from '@pages/NewGroup';
import { Routes } from './src/Routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}

// Configurar o EsLint
