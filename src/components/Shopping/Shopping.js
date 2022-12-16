import React, { useState } from 'react';
import Card from '../UI/Card';
import { useSelector } from 'react-redux';
import ShoppingFilter from './ShoppingFilter';
import './Shopping.css';
import ShoppingItem from './ShoppingItem';

const Shopping = () => {
  
  const {shop_listt} = useSelector((Appstate) => 
  ({shop_listt: Appstate.user.shop_items
  }))
  const [filteredArea, setFilteredArea] = useState('Thane');
  const [filteredCategory, setFilteredCategory] = useState('Grocery');

  const filterAreaHandler = (selectedArea) => {
    setFilteredArea(selectedArea);
  };

  const filterCategoryHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };

  const filteredShop = shop_listt.filter((shop) => {
    return (shop.area === filteredArea && shop.category === filteredCategory);
  });


  

  return (
    <div>
      <Card className='shops'>
        <ShoppingFilter
          selectedArea={filteredArea}
          onChangeAreaFilter={filterAreaHandler}
          selectedCat={filteredCategory}
          onChangeCatFilter={filterCategoryHandler}
        />
        <ShoppingItem />
      </Card>
    </div>
  );
};

export default Shopping;