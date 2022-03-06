import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import color from '../config/color';
import Icon from '../components/Icon';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
  {
    id: 1,
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: color.primary,
    },
    target: "Listings"
  },
  {
    id: 2,
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: color.secondary,
    },
    target: "Messages"
  },
];

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Akan Imoh'
          subTitle='Peterimoh@gmail.com'
          image={require('../../asset/imoh.jpeg')}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.id}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  backgroundColor={item.icon.backgroundColor}
                  name={item.icon.name}
                />
              }
              onPress={()=> navigation.navigate(item.target)}
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title={'Logout'}
          IconComponent={<Icon name={'logout'} backgroundColor='#ffe66d' />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    top: -20,
    backgroundColor: color.white,
  },

  screen: {
    backgroundColor: color.light,
  },
});
