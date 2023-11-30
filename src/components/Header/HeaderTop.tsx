
import location from '../../assets/img/location.svg';
import account from '../../assets/img/account.png'; 
import style from './Header.module.scss'
import React from 'react';


type TheaderTop = {
  headerShow: boolean;
}
export const HeaderTop: React.FC<TheaderTop> = ({headerShow}) => {
  return (
    <div className={style.topHeader}>
          <div className={`w-full h-10 border ${headerShow ? 'hidden' : 'block'}`}>
      <div className="w-[80%] h-[100%] flex justify-between items-center m-auto border-lime-300">
        <ul className="flex">
          <img src={location} alt="location" />

          <select className="ml-[8px]" name="" id="">
            <option>Москва</option>
            <option>Питер</option>
          </select>
          <a href="#adress" className="ml-[40px]">
            <li>Проверить адресс</li>
          </a>
          <a href="#time" className="ml-[40px]">
            <li>
              Среднее время доставки <span className="font-semibold">00:00</span>
            </li>
          </a>
        </ul>
        <ul className="flex items-center">
          <a href="#work-time">
            <li>Время работы: с 11:00 до 23:00</li>
          </a>
          <img className="ml-[40px]" src={account} alt="" />
          <a className="ml-2" href="#sign-in">
            <li>Войти в аккаунт</li>
          </a>
        </ul>
      </div>
    </div>
    </div>

  );
};
