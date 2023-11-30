
import style from './Pizza.module.scss';
import {useDispatch} from 'react-redux'

import { onAddIngredients } from '../../app/slices/cartSlice';
// import { RootState } from '../../app/store';

type Ingredients = {
  id: number; 
  title: string; 
  img: string;
  price: number;
  active: boolean

}

interface IingredientsProps {
  ingredients: Ingredients[]
}




export const Ingredients: React.FC<IingredientsProps> = ({ ingredients }) => { 
  
  

  // const { id, price } = useSelector((state: RootState) => state.info.info);


  const dispatch  = useDispatch() 
 


    
function getPrice (id: number) {
  


 
   
      dispatch(onAddIngredients(id))
  

  
 
 
}


  // function show () {
  //   dispatch(onAddIngredients())
  // }
   
 
  
  return (
    <div>
      <div className="flex justify-between md:flex-wrap gap-[0px] md:gap-[5px]">
        {ingredients?.map((item) => (
          <div onClick={()=> getPrice(item.id)} className='w-[105px] h-[154px]'>
            {' '}
            <div className={style.ingredients}>
              <img className={`${style.checkbox} ${item.active ? style.active : ''}`} src="/checkbox.png" alt="" />

              <img src={item.img} alt="" />
            </div>
            <h3 className="text-[14px] text-start md:text-center">
              {item.title}
            </h3>
            <p className="text-[14px] text-[#FF7010] font-semibold text-start md:text-center">{item.price} ₽</p>
          </div>
        ))}
      </div>
    </div>
  );
};
