import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImagePicker from './ImagePicker';

const ImageInputList = ({ imageUrls = [], onRemoveImage, onAddImage }) => {
  const ScrollerView = useRef();

  return (
    <View>
      <ScrollView
        ref={ScrollerView}
        horizontal
        onContentSizeChange={() => ScrollerView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUrls.map((ele) => (
            <View style={styles.holdImg} key={ele}>
              <ImagePicker
                imageUri={ele}
                handleDelete={(ele) => onRemoveImage(ele)}
              />
            </View>
          ))}
          <ImagePicker onChangeImage={(ele) => onAddImage(ele)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  holdImg: {
    marginRight: 10,
  },
});
export default ImageInputList;
