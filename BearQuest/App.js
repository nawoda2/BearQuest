import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'MochiyPopOne-Regular': require('../BearQuest/assets/fonts/MochiyPopOne-Regular.ttf'), 
      });
      setFontLoaded(true);
    }
    
    loadFont();
  }, []);

  if (!fontLoaded) {
    return <View style={styles.loadingContainer}><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.colorOverlay1} />
      <View style={styles.colorOverlay2} />
      <View style={styles.titleBox}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.welcomeText}>to</Text>
        <Text style={styles.bearQuestText}>BearQuest</Text>
      </View>
      <Image source={require('../BearQuest/assets/cal-bear.png')} style={styles.bearImage}/>
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD57E', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorOverlay1: {
    ...StyleSheet.absoluteFillObject, // Makes the view fill the entire container
    backgroundColor: 'rgba(255, 196, 140, 0.5)', // Mid color with half opacity
  },
  colorOverlay2: {
    ...StyleSheet.absoluteFillObject, // Makes the view fill the entire container
    backgroundColor: '#FFC48C', // End color
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 40,
    color: 'blue',
    fontFamily: 'MochicyPopOne-Regular', // Use the custom font here.
  },
  bearImage: {
    width: 150,  // Adjust the width and height as necessary
    height: 150,
    marginBottom: 20,
  },
  bearQuestText: {
    fontSize: 40,
    color: 'blue',
    fontFamily: 'MochicyPopOne-Regular',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#0A74DA',  
    paddingHorizontal: 60,      // Adjust the horizontal padding to control the width.
    paddingVertical: 15,        // Adjust the vertical padding to control the height.
    borderRadius: 40,           // This will give a rounded effect to the button.
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,               
  },
  startButtonText: {
    color: 'yellow',
    fontSize: 20,
    fontFamily: 'MochicyPopOne-Regular',
  }
});

