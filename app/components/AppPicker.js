import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyle from '../config/styles';
import AppText from './appText/AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({
  icon,
  placeholder,
  items,
  width = '100%',
  numberOfColumns=1, 
  selectedItem,
  onSelectItem,
  PickerItemComponent = PickerItem,
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyle.color.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText
              style={[styles.text, { color: defaultStyle.color.medium }]}
            >
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyle.color.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setIsVisible(false)} />

          <FlatList
            data={items}
            keyExtractor={(items) => items.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  setIsVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.color.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },
});
