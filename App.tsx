import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='allowsEditing: false' onPress={() => ImagePicker.launchImageLibraryAsync({
        allowsEditing: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      }).then(console.log).then(console.warn)} />
      <Button title='allowsEditing: true' onPress={() => ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      }).then(console.log).then(console.warn)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
