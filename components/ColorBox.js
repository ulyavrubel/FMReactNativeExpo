import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Colorbox({ colorName, hexCode }) {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.whiteText}>
        {colorName.charAt(0).toUpperCase() + colorName.slice(1) + ' ' + hexCode}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  whiteText: {
    color: '#ffffff',
  },
});
