import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import ButtonComponent from './app/components/Button';
import color from './app/config/color';
import ViewImageScreen from './app/container/ViewImageScreen';
import WelcomeScreen from './app/container/WelcomeScreen';

export default function App() {
  return (
    <>
      <WelcomeScreen />
      {/* <ViewImageScreen />  */}

    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
  },
});
