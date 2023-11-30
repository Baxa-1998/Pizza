
import style from './Footer.module.scss';

import { FooterLeft } from './FooterLeft';
import { FooterCenter } from './FooterCenter';
import { FooterRight } from './FooterRight';
import { MobileBasket } from './MobileBasket';

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: 'Куда пицца',
      subtitle: ['О компании', 'Пользовательское соглашение', 'Условия гарантии'],
    },
    { id: 2, title: 'Помощь', subtitle: ['Ресторан', 'Контакты', 'Поддержка', 'Отследить заказ'] },
  ];
  return (
    <div className={style.footer}>
      <div className={style.footerWrapper}> 
      
        <FooterLeft />
        {footerLinks.map((items) => (
          <FooterCenter key={items.id}  {...items} />
        ))}
        <FooterRight />
        <MobileBasket/>
        
        <div className={style.copyright}> 
    © Copyright 2021 — Куда Пицца
    </div>

      </div>
    </div>
  );
};

export default Footer
