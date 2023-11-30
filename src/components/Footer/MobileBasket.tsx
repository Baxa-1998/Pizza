import style from './Footer.module.scss'

export const MobileBasket = () => {
  return (
    <div className={style.basket}>
         <div className={style.basketWrapper}>
      <img src="/basket.svg" alt="" />
      <span className="flex items-center justify-center  text-[#FF7010] absolute right-0 top-0 w-[20px] h-[20px] rounded-[50%] border text-3 bg-[#fff]">
        3
      </span>
    </div>
    </div>
  );
    
 
};
