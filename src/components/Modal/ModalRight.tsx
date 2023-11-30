import React from 'react';
import style from './Modal.module.scss';
import { PizzaSelector } from '../Pizza/PizzaSelector';
import { Ingredients } from '../Pizza/Ingredients';
import { Button } from '../../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CartItems, setItem } from '../../app/slices/cartSlice';
import { RootState } from '../../app/store';


type ModalRightType = {

  activeType: number;
  setActiveType: (type: number )=> void;
  activeSize: number;
  setActiveSize: (idx: number )=> void;

  closeModal: ()=> void;

}

// import { setActiveTypeState } from '../../app/slices/infoSlice';
export const ModalRight: React.FC<ModalRightType> = ({
  activeType,
  setActiveType,
  activeSize,
  setActiveSize,
  closeModal,
 
}) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state: RootState) => state.cart.ingredients) 
  
  const { id, title, imageUrl, size, type } = useSelector((state: any) => state.info.info);
  const typesIndex = useSelector((state: RootState) => state.info.typesIndex);
  const price= useSelector((state: RootState) => state.cart.price)

 

 

  function onAddToCart () { 
    const ingredient = ingredients.filter(item => item.active === true)
   
      const item: CartItems = {
       
        id,
        title, 
        imageUrl,
        size,
        type: typesIndex[activeType],
        price,
        ingredient,
        count: 0
      
        

      }
      dispatch(setItem(item))
    
      closeModal()
   
     
      
  }



  return (
    <div className={style.modalRight}>
      {/* top */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] font-bold">{title}</h2>
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="mt-[25px]">
        <PizzaSelector
      
          types={type}
          sizes={size}
          activeSize={activeSize}
          activeType={activeType}
          setActiveType={setActiveType}
          setActiveSize={setActiveSize}
        />
      </div>
      <h2 className="text-[18px] font-bold mt-[25px]">Добавьте в пиццу</h2>
      <Ingredients ingredients={ingredients} />
      <div className="mt-[25px] flex items-center justify-between">
        <span className="text-[#FF7010] text-[20px] font-semibold">Итого: {price} ₽</span>
        {/* <button className='bg-[#FF7010]'>Добавить</button> */}
        <Button  onAddToCart={onAddToCart}/>
      </div>
    </div>
  );
};
