import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { messages } from '../config/tempMessageArr';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteSwiper from '../components/ListItemDeleteSwiper';

export default function MessagesScreen() {
  const [messageArr, setMessageArr] = useState(messages);
  const [onTriggerRefresh, setOnTriggerRefresh] = useState(false)

  const handleDeleteAction = (item) => {
    const newMessageArr = messageArr.filter((x) => x.id !== item.id);

    setMessageArr(newMessageArr);
  };

  return (
    <Screen>
      <FlatList
        data={messageArr}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.desc}
            image={item.image}
            onPress={() => console.warn(item)}
            renderRightActions={() => (
              <ListItemDeleteSwiper
                swipeableAction={()=>handleDeleteAction(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={onTriggerRefresh}
        onRefresh={() => {
          setMessageArr([
            {
              id: 2,
              title: 'Hello love',
              desc: 'bla bla bla',
              image: require('../../asset/imoh.jpeg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
