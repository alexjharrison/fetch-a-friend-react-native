import React, {useState, useEffect} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  species: 'cat' | 'dog';
  filename: string;
  url: string;
  resultIsArray: boolean;
}

const AnimalPage = (props: Props) => {
  const [imageUri, setImageUri] = useState<string>();
  const [errorMsg, setErrorMsg] = useState();

  const fetchImage = () => {
    setErrorMsg(undefined);
    fetch(props.url)
      .then((res) => res.json())
      .then((res) => {
        props.resultIsArray
          ? setImageUri(res[0][props.filename])
          : setImageUri(res[props.filename]);
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  useEffect(fetchImage, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Click the button to get a new {props.species} picture
      </Text>
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={styles.animalImage}
          resizeMode="contain"
        />
      )}
      <View style={styles.fetchButton}>
        <Button title={`Grab a new ${props.species}`} onPress={fetchImage} />
      </View>
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
};

export default AnimalPage;

const styles = StyleSheet.create({
  animalImage: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fetchButton: {
    margin: 20,
  },
  headerText: {
    fontSize: 34,
    textAlign: 'center',
    margin: 20,
    lineHeight: 34,
    paddingBottom: 5,
    borderBottomColor: '#777',
    borderBottomWidth: 1,
  },
});
