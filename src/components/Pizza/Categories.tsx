import React from 'react'; 
import {useSelector} from 'react-redux'
import { RootState } from '../../app/store';



type CategoriesProps = {
  isCategory: (idx:number) => void
}
   



const Categories: React.FC <CategoriesProps> = ({isCategory}) => { 
  const categoryId = useSelector((state: RootState)=> state.filter.categoriesId)


  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => (
          <li
            key={idx}
            className={`${categoryId === idx ? 'active' : ''}`}
            onClick={() => isCategory(idx)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
