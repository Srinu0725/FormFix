import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const UploadVideo = ({ onUpload }: { onUpload: (video: any) => void }) => {
  const [athleteVideo, setAthleteVideo] = useState<string | null>(null);
  const [referenceVideo, setReferenceVideo] = useState<string | null>(null);

  const selectVideo = (type: 'athlete' | 'reference') => {
    ImagePicker.launchImageLibrary({ mediaType: 'video' }, (response) => {
      if (!response.didCancel && response.assets) {
        const uri = response.assets[0].uri ?? null;
        if (type === 'athlete') {
          setAthleteVideo(uri);
          onUpload({ type: 'athlete', uri });
        } else {
          setReferenceVideo(uri);
          onUpload({ type: 'reference', uri });
        }
      }
    });
  };
  

  return (
    <View style={styles.container}>
      <Button title="Upload Athlete Video" onPress={() => selectVideo('athlete')} />
      {athleteVideo && <Text>✅ Athlete Video Uploaded</Text>}
      <Button title="Upload Reference Video" onPress={() => selectVideo('reference')} />
      {referenceVideo && <Text>✅ Reference Video Uploaded</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
});

export default UploadVideo;
