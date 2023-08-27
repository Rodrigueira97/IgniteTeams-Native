import { Home } from '@pages/Home';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading/Index';
import { StatusBar } from 'react-native';
import { NewGroup } from '@pages/NewGroup';
import { Players } from '@pages/Players';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}

// Configurar o EsLint
