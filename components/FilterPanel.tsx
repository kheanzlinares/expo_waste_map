import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FilterPanelProps {
  showPaper: boolean;
  setShowPaper: (value: boolean) => void;
  showGlass: boolean;
  setShowGlass: (value: boolean) => void;
}

function FilterPanel ({
  showPaper,
  setShowPaper,
  showGlass,
  setShowGlass,
}: FilterPanelProps) {
  const renderChecbox = (
    label: string,
    value: boolean,
    onToggle: (val: boolean) => void
  ) => (
    <Pressable style={styles.checkboxRow} onPress={() => onToggle(!value)}>
      <Icon
      name={value ? 'check-box' : 'check-box-outline-blank'}
      size={24}
      color={value ? '#2eaf4a' : '#555'}
      style={styles.icon}
      />
      <Text>{label}</Text>
    </Pressable>
  );

  return(
    <View style={styles.panel}>
      <Text style={styles.title}>Waste containers</Text>
      {renderChecbox('Paper', showPaper, setShowPaper)}
      {renderChecbox('Glass', showGlass, setShowGlass)}
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    top: 20,
    left: 12,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    zIndex: 1000,
    shadowColor: '#0000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  icon: {
    marginRight: 8,
  }
});

export default FilterPanel;