import React from 'react';
import style from './Menu.module.scss';



type TmenuItemProps = {
  img: string; 
  title: string;
  id:number; 
  isSelect: (number:number)=> void; 
  changeColor: number; 
  img2: string;
  setChangeColor: (n: number)=> void; 
  
  
}

export const MenuItem: React.FC<TmenuItemProps> = ({ img, title, id, isSelect, changeColor, img2, setChangeColor }) => {
  return (
    <div
      onMouseEnter={() => isSelect(id)}
      onMouseLeave={() => setChangeColor(0)}
      className={style.menuItem}>
      <div className="w-[49px] h-[64px] flex flex-col items-center mt-[20px]">
        {changeColor === id ? (
          <img className="z-50" src={img2} alt="" />
        ) : (
          <img className="z-50" src={img} alt="" />
        )}

        <h3  className={style.title}>{title}</h3>
        
      </div>
    </div>
  );
};
