import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={16} color="white" style={styles.icon} />
      <TextInput
        placeholder="Search location"
        placeholderTextColor="#FFFFFF"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: 10,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 8,
    zIndex: 10,
  },
  input: {
    paddingLeft: 28,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 6,
    minWidth: 180,
    color: '#000',
  },
});
