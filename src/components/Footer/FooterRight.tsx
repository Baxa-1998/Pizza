import React from 'react';




export const FooterRight: React.FC = () => {
  return (
    <div>
       <h1 className="text-[20px] font-semibold">Контакты</h1>
      <div className="flex mt-[20px]">
        <img src="/footer-phone.svg" alt="" />
        <a href="tel:+7 (926) 223-10-11">
          <li className="ml-3">+7 (926) 223-10-11</li>
        </a>
      </div>
      <div className="flex mt-[20px]">
        <img src="/footer-location.svg" alt="" />
        <a href="#link">
          <li className="ml-3">Москва, ул. Юных Ленинцев, д.99</li>
        </a>
      </div>
      <div className="flex mt-[20px]">
        <img src="/footer-social.svg" alt="social" />
        <a href="">
          <li className="ml-3">Facebook</li>
        </a>
        <div className="flex ml-6">
          <img src="/footer-social2.svg" alt="social" />
          <a href="">
            <li className="ml-3">Instagramm</li>
          </a>
        </div>
      </div>
    </div>
  );
};
