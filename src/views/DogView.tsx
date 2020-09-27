import React from 'react';
import AnimalPage from '../components/AnimalPage';

const DogView = () => {
  return (
    <AnimalPage
      species="dog"
      url="https://dog.ceo/api/breeds/image/random"
      filename="message"
      resultIsArray={false}
    />
  );
};

export default DogView;
