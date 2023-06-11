import React from 'react';
import { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import styles from "./styles";
import Header from './components/Header';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

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
      
      <View style={{ flex: 8 }}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
          }
        >
          <Accordion items={[1, 2, 3, 4, 5]}/>
          <Accordion items={[]}/>

          <Carousel month={'January'}/>

          <View style={{ opacity: 0, height: 25 }}></View>
        </ScrollView>
      </View>

      <Footer></Footer>
    </View>
  );
}
