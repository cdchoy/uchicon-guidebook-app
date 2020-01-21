import React from 'react';
import {StyleSheet, View, Image, Text } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export default function MapScreen() {
  return (
      <View style={styles.container}>
        <ScrollView 
          horizontal
          centerContent
          minimumZoomScale={1} // ios only as of RN 0.61.4
          maximumZoomScale={5}
        >
          <Image source={require('../assets/images/map.png')} style={styles.mapImg} />
        </ScrollView>
      </View>
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexGrow: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  mapImg: {
    resizeMode: 'contain',
    alignItems: 'flex-start',
    height: '100%',
    width: 800
  },
});
