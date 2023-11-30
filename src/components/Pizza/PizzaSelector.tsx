
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';




type PizzaSelectorProps = {
  types: number[];
  activeType: number;
  setActiveType: (type: number )=> void;
  activeSize: number;
  setActiveSize: (idx: number )=> void;
  sizes: number[];
}

export const PizzaSelector: React.FC<PizzaSelectorProps> = ({
  types,
  activeType,
  setActiveType,
  activeSize,
  setActiveSize,
  
  sizes,
}) => {

  
 
  const typesIndex = useSelector((state: RootState) => state.info.typesIndex);



  return (
    <div className="pizza-block__selector">
      <ul>
        {types?.map((type, i) => (
          <li
            key={i}
            onClick={() => setActiveType(type)}
            className={`${activeType === type ? 'active' : ''}`}>
            {typesIndex[type]}{' '}
          </li>
        ))}
      </ul>
      <ul>
        {sizes?.map((size, idx) => (
          <li
            key={idx}
            onClick={() => setActiveSize(idx)}
            className={`${activeSize === idx ? 'active' : ''}`}>
            {size} см
          </li>
        ))}
      </ul>
    </div>
  );
};
