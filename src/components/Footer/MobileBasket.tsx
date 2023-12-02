import { Link } from 'react-router-dom';
import style from './Footer.module.scss'
import { useSelector } from 'react-redux';
import { selectCart } from '../../app/slices/cartSlice';

export const MobileBasket = () => {

  const {items } = useSelector(selectCart); 
  

  const totalCount = items.reduce((sum: number,item: any)=> sum + item.count  ,0) 

  return (
    <Link to="/cart" className={style.basket}>
         <div className={style.basketWrapper}>
      <img src="/basket.svg" alt="" />
      <span className="flex items-center justify-center  text-[#FF7010] absolute right-0 top-0 w-[20px] h-[20px] rounded-[50%] border text-3 bg-[#fff]">
        {totalCount}
      </span>
    </div>
    </Link>
  );
    
 
};
