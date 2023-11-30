import React from 'react'
import style from './NotFound.module.scss'
export const NotFound: React.FC = () => {
  return (
    <div className={style.notFound}>
      <h1 >
        <span>😕</span> <br />
        Ничего не найдено
      </h1> 
      <p>К сожалению данная страница отсутствует</p>
    </div>
  );
};
