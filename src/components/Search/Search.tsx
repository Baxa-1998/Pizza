import React, { useCallback, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import style from './Search.module.scss';

import debounce from 'lodash.debounce';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../app/slices/filterSlice';
import { RootState } from '../../app/store';

export const Search: React.FC = () => {
  const searchValue = useSelector((state:RootState) => state.filter.searchValue) 
  const dispatch = useDispatch()
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  function onClickClear() {
  
    
    setValue('');
   dispatch(setSearchValue(('')))
    inputRef.current?.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str: string) => {
        dispatch(setSearchValue((str)))
    }, 500),
    [],
  );

  function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <form className={style.wrapper}>
      {/* <h2>Поиск по сайту</h2> */}

      <input
        ref={inputRef}
        className={style.input}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Поиск..."
      />

      <FiSearch className={style.search} />
      {searchValue && <AiOutlineClose onClick={onClickClear} className={style.close} />}
    </form>
  );
};
