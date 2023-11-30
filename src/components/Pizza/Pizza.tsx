
import Categories from './Categories';
import Sort from './Sort';
import { PizzaBlock } from './PizzaBlock';
import '../../scss/app.scss';
import Skeleton from './Skeleton';


type Tingredients = {
  id: number; 
  title: string; 
  img: string;
  price: number;
  active: boolean
}

type PizzeFetched = {
  id: number;
  imageUrl: string;
  title: string; 
  types: number[];
  sizes: number[];
  price: number;
  category:number;
  rating: number;
  ingredients: Tingredients[];
}

interface IpizzaProps {
  arr: PizzeFetched[];
  isCategory: (index: number)=>void;
  isSort: any;
  openModal:()=> void;
  modal: boolean;
  closeModal: ()=> void;
  status: string
}



export const Pizza: React.FC<IpizzaProps> = ({ arr, isCategory, isSort, openModal,modal, closeModal, status }) => {
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const arrItems = arr.map((item) => <PizzaBlock key={item.id} openModal={openModal} modal={modal} closeModal= {closeModal} {...item} />);

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories isCategory={isCategory} />
            <Sort isSort={isSort} />
          </div>

          <h2 className="content__title">Все Пиццы</h2>
            {status === 'error' ? (
              <div className='content__error-info'> 
              <h2>Произошло ошибка 😕</h2> 
              <p>К сожалению не получилось получить данные. Попробуйте повторить попытку позже</p> 


              </div>

            ): (
                  <div className="content__items">{status === 'loading' ? skeleton : arrItems}</div>
            )}
      
        </div>
      </div>
    </div>
  );
};
