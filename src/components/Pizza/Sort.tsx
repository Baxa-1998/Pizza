import {  useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';



type SortItem = {
  name: string;
  sortProperty: string;
}





// Alternatively, if isSort is part of the props, specify the type in the interface

type SortProps = {
  isSort: (idx:Object) => void
}








export const list:SortItem[] = [
  { name: 'популярность (DESC)', sortProperty: 'rating' },
  { name: 'популярность (ASC)', sortProperty: '-rating' },
  { name: 'цена (DESC)', sortProperty: 'price' },
  { name: 'цена (ASC)', sortProperty: '-price' },
  { name: 'название (DESC)', sortProperty: 'title' },
  { name: 'название (ASC)', sortProperty: '-title' },
];


const Sort: React.FC<SortProps> =  ({ isSort }) => {
  const [visible, setVisible] = useState(false);

  const sortType = useSelector((state: RootState) => state.filter.sort);

  const sortRef = useRef<HTMLDivElement>(null);

 
  function onHandleSelected(index: Object) {
    isSort(index);
    setVisible(false);
    console.log(index);
    
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent ) => {
      // const _event = event as MouseEvent & {
      //   path: Node[]
      // }
    
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setVisible(false);
  
    
    }
  };
    
    document.body.addEventListener('click', handleClickOutside);
    return () => { 

  document.body.removeEventListener('click', handleClickOutside);
    }
  }, []);


  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setVisible(!visible)}>{sortType.name}</span>
      </div>

      {visible && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li 
              key={i}
                onClick={() => onHandleSelected(obj)}
                className={`${sortType.sortProperty === obj.sortProperty ? 'active' : ''}`}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;