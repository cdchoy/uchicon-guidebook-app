import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScheduleItem from '../components/ScheduleItem';

import panelsData from '../assets/files/panels.json';

export default function ScheduleScreen() {
  const panels = panelsData.panels;

  return (
    <ScrollView style={styles.container}>
      {
        panels.map((item, i) => (
          <ScheduleItem
            key={i}
            item={item}
          />
        ))
      }
    </ScrollView>
  );
}

ScheduleScreen.navigationOptions = {
  title: 'Schedule',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
});
