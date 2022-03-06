import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as UserLocation from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState();

  const request_user_location = async () => {
    try {
      const { granted } =
        await UserLocation.requestForegroundPermissionsAsync();
      if (!granted) return;

      const { coords } = await UserLocation.getLastKnownPositionAsync({});

      if (coords) {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      // console.log(err);
    }
  };

  useEffect(() => {
    request_user_location();
  }, []);

  return location;
};

export default useLocation;
