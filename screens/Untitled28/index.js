import { Slider } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled28 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Switch style={styles.knqyPNCG}></Switch><ActivityIndicator style={styles.wOhgyrZO}></ActivityIndicator><Slider style={styles.VibuiaGV} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  knqyPNCG: {
    width: 50,
    height: 25
  },
  wOhgyrZO: {
    width: 50,
    height: 50
  },
  VibuiaGV: {
    width: 150,
    height: 40
  }
});
export default Untitled28;