import React from 'react';
import { MenuItem } from './MenuItem';
import style from './Menu.module.scss';

export const Menu = () => {
  const [changeColor, setChangeColor] = React.useState(0);
  const menuList = [
    { id: 1, img: '/stock-icon.svg', img2: '/stock-icon-white.svg', title: 'Акции' },
    { id: 2, img: '/pizza-icon.svg', img2: '/pizza-icon-white.svg', title: 'Пицца' },
    { id: 3, img: '/sushi-icon.svg', img2: '/sushi-icon-white.svg', title: 'Суши' },
    { id: 4, img: '/drinks-icon.svg', img2: '/drinks-icon-white.svg', title: 'Напитки' },
    { id: 5, img: '/snacks-icon.svg', img2: '/snacks-icon-white.svg', title: 'Закуски' },
    { id: 6, img: '/kombo-icon.svg', img2: '/kombo-icon-white.svg', title: 'Комбо' },
    { id: 7, img: '/deserts-icon.svg', img2: '/deserts-icon-white.svg', title: 'Десерты' },
    { id: 8, img: '/sauces-icon.svg', img2: '/sauces-icon-white.svg', title: 'Соусы' },
  ];

  function isSelect(index: number) {
    setChangeColor(index);
  }
  return (
    <div className={style.menuWrap}>  
       <div className={style.menu}>
      {menuList.map((item) => (
        <MenuItem
        key={item.id}
          setChangeColor={setChangeColor}
          changeColor={changeColor}
          isSelect={isSelect}
        
          {...item}
        />
      ))}
    </div>
    </div>
 
  );
};
