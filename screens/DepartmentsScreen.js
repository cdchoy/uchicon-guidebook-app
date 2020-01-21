import React from 'react';
import {StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DepartmentItem from '../components/DepartmentItem';

import departmentsData from '../assets/files/departments.json';

export default function DepartmentsScreen() {
  const departments = departmentsData.departments;

  return (
    <ScrollView style={styles.container}>
      {
        departments.map((item, i) => (
          <DepartmentItem
            key={i}
            item={item}
          />
        ))
      }
    </ScrollView>
  );
}

DepartmentsScreen.navigationOptions = {
  title: 'Departments',
};

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexGrow: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
});
