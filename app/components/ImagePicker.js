import React, { useEffect } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePick from 'expo-image-picker';

import color from '../config/color';

const ImagePicker = ({ imageUri, onChangeImage, handleDelete }) => {
  const requestPermission = async () => {
    const { granted } = await ImagePick.requestMediaLibraryPermissionsAsync();

    if (!granted) alert('You need to Enable Camera and Video to upload Image');
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const requestImage = async () => {
    const res = await ImagePick.launchImageLibraryAsync({
      mediaTypes: ImagePick.MediaTypeOptions.Images,
      quality: 0.5,
    });
    if (!res.cancelled) onChangeImage(res.uri);
  };

  const handleImageChange = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this image', [
      { text: 'Yes', onPress: () => handleDelete(imageUri) },
      { text: 'No' },
    ]);
  };

  return (
    <View style={styles.container}>
      {!imageUri && (
        <TouchableWithoutFeedback onPress={requestImage}>
          <View style={styles.imgwrap}>
            <MaterialCommunityIcons
              name='camera'
              size={40}
              color={color.medium}
            />
          </View>
        </TouchableWithoutFeedback>
      )}

      {imageUri !== undefined && (
        <TouchableWithoutFeedback onPress={handleImageChange}>
          <Image
            style={styles.image}
            source={{ uri: imageUri }}
            resizeMode='cover'
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginVertical: 20,
    overflow: 'hidden',
  },

  imgwrap: {
    height: 100,
    width: 100,
    backgroundColor: color.light,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  imageFlexible: {
    flexDirection: 'row',
    padding: 10,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 10,
  },
});
export default ImagePicker;
