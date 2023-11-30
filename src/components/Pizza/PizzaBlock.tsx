
import { motion } from 'framer-motion';

import { useDispatch} from 'react-redux';
import React from 'react';
import { Modal } from '../Modal/Modal';
import { setIngredients,  setPrice } from '../../app/slices/cartSlice';
import { setInfo, } from '../../app/slices/infoSlice';
import style from './Pizza.module.scss';


type Ingredients = {
  id: number; 
  title: string; 
  img: string;
  price: number;
  active: boolean
}



interface PizzaProps  {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  ingredients: Ingredients[];
 
  openModal: ()=> void; 
  modal: boolean;
  closeModal: ()=> void; 



}



export const PizzaBlock:React.FC<PizzaProps> = ({
  title,
  price,
  imageUrl,
  sizes,
  types,
  openModal,
  ingredients,
  modal,
  closeModal,
  id,
}) => {
  // const typesIndex = [' тонкое ', ' традиционное'];

  // const {activeSize,setActiveSize, activeType,setActiveType} = useContext(ActiveContext)

  const dispatch = useDispatch();
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

 

  function isGetInfo() {
  
    openModal();
    const items = {
      id: id,
      title: title,
      price: price,
      type: types,
      size: sizes,
      imageUrl: imageUrl,
      
    };
    dispatch(setInfo(items)); 
    dispatch(setIngredients(ingredients))
    
  
    dispatch(setPrice(price))
  }

  return (
    <div className="flex justify-center">
      <Modal
        activeType={activeType}
        setActiveSize={setActiveSize}
        setActiveType={setActiveType}
        activeSize={activeSize}
        modal={modal}
        closeModal={closeModal}
        id={id}
      />

      <div className="pizza-block">
        <motion.img
          whileHover={{ y: 4 }}
          onClick={isGetInfo}
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
        {/* {types !== undefined ? (
          <PizzaSelector
            sizes={sizes}
            types={types}
            activeType={activeType}
            setActiveSize={setActiveSize}
            setActiveType={setActiveType}
            activeSize={activeSize}
          />
        ) : (
          ''
        )} */}
        <span>
          Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус
        </span>

        <div className="pizza-block__bottom">
          <button className={style.btn} onClick={isGetInfo}>
            Открыть
          </button>
          <div className="text-[#FF7010] font-semibold text-[18px]">от {price} ₽</div>
        </div>
      </div>
    </div>
  );
};
