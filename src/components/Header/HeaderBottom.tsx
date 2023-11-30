import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/pizza-logo.svg';
import { motion } from 'framer-motion';
import style from './Header.module.scss';
import { Popup } from '../Popup/Popup';
import { FooterRight } from '../Footer/FooterRight';
import { useSelector } from 'react-redux';
import { selectCart } from '../../app/slices/cartSlice'; 



interface IHeaderBottomProps {
  headerShow: boolean;
  openBurger: boolean;
   setOpenBurger: (b: boolean)=>void;
  
}

export const HeaderBottom: React.FC<IHeaderBottomProps> = ({ headerShow, openBurger, setOpenBurger }) => {
  const otherList = [
    'Aкции',
    'O компании',
    'Пользовательское соглашение',
    'Условия гарантии',
    'Ресторан',
    'Контакты',
    'Поддержка',
    'Отследить заказ',
  ];
  const [openPopup, setOpenPopup] = useState(false);
  const [selected, setSelected] = useState(0);

  const { totalPrice, items } = useSelector(selectCart); 
  



  const totalCount = items.reduce((sum: number,item: any)=> sum + item.count  ,0) 
  
 

  function isSelected(index: number) {
    setSelected(index);
    setOpenPopup(false);
  }

  return (
    <div className={`w-full flex  h-[64px] z-50 bg-[#fff] ${headerShow ? 'fixed' : ''}`}>
      <div className="w-[80%] flex justify-between items-center m-auto">
        <Link to="/">
          {' '}
          <div className="flex items-center">
            {' '}
            <img src={logo} alt="pizza-logo" />
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 100 }} className="ml-4">
              Куда пицца
            </motion.h3>
          </div>
        </Link>
        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          headerShow={headerShow}
          style={style}
        />

        {/* popup block */}

        {openBurger ? (
          <div className={`${style.popup} ${openBurger ? style.active : ''}`}>
            {otherList.map((list, i) => (
              <a
                key={i}
                onClick={() => isSelected(i)}
                className={`${selected === i ? 'active' : ''} pb-8`}
                href="#">
                <li className="mt-[16px]">{list}</li>
              </a>
            ))}

            <div className="h-[185px] mt-[35px] ">
              <FooterRight />
            </div>

            <div>
              <p className="text-[14px] text-[#A5A5A5]">Время работы: с 11:00 до 23:00</p>
            </div>
          </div>
        ) : (
          <div className={`${style.popup} ${openPopup ? style.active : ''}`}>
            {otherList.map((list, i) => (
              <a
                key={i}
                onClick={() => isSelected(i)}
                className={`${selected === i ? 'active' : ''} mt-8`}
                href="#">
                <li className="mt-[16px]">{list}</li>
              </a>
            ))}{' '}
          </div>
        )}

        <div
          onClick={() => {
            setOpenBurger(!openBurger);
            // setOpenPopup(!openPopup);
          }}
          className={style.burger}>
          <div className={`${style.burgerItems} ${openBurger ? style.active3 : ''}`}></div>
          <div className={`${style.burgerItems} ${openBurger ? style.active2 : ''}`}></div>
          <div className={`${style.burgerItems} ${openBurger ? style.active1 : ''}`}></div>
        </div>

        <div className={style.button}>
          {' '}
          <div className="w-[170px] h-[60px] flex items-center justify-center">
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{totalCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
