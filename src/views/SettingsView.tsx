import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SettingsView = () => {
  return (
    <View style={styles}>
      <Text> Settings Screen</Text>
      <Button title="Toggle Dark Theme" onPress={() => {}} />
    </View>
  );
};

export default SettingsView;

const styles = StyleSheet.create({});
