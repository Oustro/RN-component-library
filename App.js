import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from "./styles";
import Card from './components/Card';
import Header from './components/Header';
import Accordion from './components/Accordion';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header></Header>
      
      <View style={styles.body}>
        <Accordion></Accordion>
      </View>

      <View style={[styles.footer, styles.footShadow]}></View>
    </View>
  );
}
