import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const HomeView = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image
        style={styles.backgroundImage}
        source={{
          uri:
            'https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        }}
      />
      <View style={styles.container}>
        <Text style={styles.headerText}>Fetch a Friend</Text>
        <View style={styles.buttonContainer}>
          <FontAwesome5Icon.Button
            name="cat"
            onPress={() => navigation.navigate('Cat')}
            backgroundColor="cadetblue">
            Fetch a Feline
          </FontAwesome5Icon.Button>

          <FontAwesome5Icon.Button
            name="dog"
            onPress={() => navigation.navigate('Dog')}
            backgroundColor="firebrick">
            Fetch a Canine
          </FontAwesome5Icon.Button>
        </View>
      </View>
    </>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginBottom: 60,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 46,
    marginTop: 60,
  },
});
