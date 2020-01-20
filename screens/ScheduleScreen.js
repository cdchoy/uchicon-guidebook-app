import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       * <ExpoLinksView />
       */}
       <Image source={require('../assets/images/robot-dev.png')} style={{alignItems: 'center'}} />
    </ScrollView>
  );
}

ScheduleScreen.navigationOptions = {
  title: 'Schedule',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
