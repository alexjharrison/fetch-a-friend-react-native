import React from 'react';
import AnimalPage from '../components/AnimalPage';

const CatView = () => {
  return (
    <AnimalPage
      species="cat"
      url="https://api.thecatapi.com/v1/images/search"
      filename="url"
      resultIsArray={true}
    />
  );
};

export default CatView;
