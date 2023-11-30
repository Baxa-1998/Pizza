import React from 'react';
import { PizzaBlock } from '../Pizza/PizzaBlock';
import Sort from '../Pizza/Sort';
import Loader from '../Pizza/Loader';

export const Snacks = ({ arr, isLoading}) => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="flex justify-end">
            <Sort />
          </div>
          <h2 className="content__title">Закуски</h2>
          <div className="content__items"> 
          
            {isLoading
              ? [...new Array(6)].map((_, index) => <Loader key={index} />)
              : arr.map((item) => <PizzaBlock key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
