import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

      const esperarAlgunosMilisegundos = async () => {

      // Evitar que el splash screen se oculte automáticamente

      await SplashScreen.preventAutoHideAsync();

      try {

          // Acá hacemos todas las llamadas asincrónicas que necesitamos.

          // Por ejemplo precarga de Fonts, llamadas a APIs externas, etc...

          // Simular una demora de 5 segundos.

          await new Promise(resolve => setTimeout(resolve, 5000));

      } catch (e) {

          console.warn(e);

      } finally {

          // Cambiar el estado de carga a falso y ocultar el splash screen

          setIsLoading(false);

          await SplashScreen.hideAsync();

      }

    };


    esperarAlgunosMilisegundos();

  }, []);


  // Renderizado condicional:

  // Mostrar una pantalla en blanco mientras se carga

  if (isLoading) {

    return null;

  }


  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

      <Text>Open up App.js to start working in your app!</Text>

    </View>

  );

}