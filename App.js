import React from 'react';
import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import styles from "./styles";
import Header from './components/Header';
import Accordion from './components/Accordion';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Header></Header>
      
      <View style={{flex: 7}}>
        <ScrollView 
          contentContainerStyle={styles.body}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }
        >
          <Accordion></Accordion>
        </ScrollView>
      </View>

      <View style={[styles.footer, styles.footShadow]}></View>
    </View>
  );
}
