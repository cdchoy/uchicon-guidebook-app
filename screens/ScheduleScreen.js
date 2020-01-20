import React from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import {ListItem, Overlay} from 'react-native-elements';

import panelsData from '../assets/files/panels.json';

export default function ScheduleScreen() {
  const panels = panelsData.panels;

  return (
    <ScrollView style={styles.container}>
      {
        panels.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            subtitle={item.location}
            subtitleStyle={{color: '#1f8cf2'}}
            rightTitle={item.start_time}
            rightSubtitle={'-' + item.end_time}
            bottomDivider
            pad={8}
            onPress={handlePanelPress}
            chevron
          />
        ))
      }
    </ScrollView>
  );
}

ScheduleScreen.navigationOptions = {
  title: 'Schedule',
};

function handlePanelPress(item) {
  // alert("Title", "Description", {text: 'Ok'});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
