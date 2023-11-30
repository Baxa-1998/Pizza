import React from 'react';
import { SlArrowDown } from 'react-icons/sl';




interface IPopup {
  headerShow: boolean;
  style: any;
  setOpenPopup: (b:boolean) => void;
  openPopup: boolean;
}

export const Popup:React.FC<IPopup> =({style,headerShow, setOpenPopup, openPopup}) => {
  return (
    <>
    
      <ul className={`${style.headerList} ${headerShow ? 'block' : 'hidden'}`}>
        <a href="">
          <li className="ml-[32px]">Акции</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Пицца</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Суши</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Напитки</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Закуски</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Комбо</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Десерты</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Соусы</li>
        </a>
        <a href="">
          <li className="ml-[32px]">Другое</li>
        </a>
        <SlArrowDown
          onClick={() => setOpenPopup(!openPopup)}
          className="ml-[8px] cursor-pointer"
          size={15}
        />
      </ul> 
     
    
   
    </>
  );
};
