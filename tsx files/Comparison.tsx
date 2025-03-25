import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const ComparisonScreen = ({ athleteUri, referenceUri }: { athleteUri: string; referenceUri: string }) => {
  return (
    <View style={styles.container}>
      {/* Athlete Video */}
      <Video
        source={{ uri: athleteUri }}
        style={styles.video}
        resizeMode="cover"
        repeat
      />
      {/* Reference Video */}
      <Video
        source={{ uri: referenceUri }}
        style={styles.video}
        resizeMode="cover"
        repeat
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  video: {
    width: '48%',
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ComparisonScreen;
