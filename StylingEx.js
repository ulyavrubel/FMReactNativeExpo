import React from 'react';

import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const StylingEx = () => {
  const colors = ['cyan', 'blue', 'magenta', 'orange'];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.boldText}>Hear some boxes</Text>
        {colors.map((colorName) => (
          <View style={[styles.box, styles[colorName]]}>
            <Text style={styles.whiteText}>
              {colorName.charAt(0).toLocaleUpperCase() +
                colorName.slice(1) +
                ' ' +
                styles[colorName].backgroundColor}
            </Text>
          </View>
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
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  whiteText: {
    color: '#ffffff',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default StylingEx;
