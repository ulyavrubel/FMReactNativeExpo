import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import Colorbox from './ColorBox';

const colors = [
  {
    colorName: 'cyan',
    hexCode: '#2aa198',
  },
  {
    colorName: 'blue',
    hexCode: '#268bd2',
  },
  {
    colorName: 'magenta',
    hexCode: '#d33682',
  },
  {
    colorName: 'orange',
    hexCode: '#cb4b16',
  },
];

const StylingEx = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.boldText}>Hear some boxes</Text>
        {colors.map(({ colorName, hexCode }, index) => (
          <Colorbox key={index} colorName={colorName} hexCode={hexCode} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StylingEx;
