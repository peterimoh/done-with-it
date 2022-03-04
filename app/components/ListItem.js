import { Image, View, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from './appText/AppText';
import color from '../config/color';

export default function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={color.light} onPress={onPress}>
          <View style={styles.listItemContainer}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}

            <View style={styles.texts}>
              <AppText
                style={styles.title}
                numbersOfLines={1}
                ellipsizeMode='tail'
              >
                {title}
              </AppText>
              {subTitle && (
                <AppText
                  style={styles.subtitle}
                  numbersOfLines={2}
                  ellipsizeMode='tail'
                >
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              name='chevron-right'
              size={25}
              color={color.medium}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 15,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  texts: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },

  title: {
    fontWeight: '500',
  },

  subtitle: {
    color: color.medium,
  },
});
