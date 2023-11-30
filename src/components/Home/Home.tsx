import React, {  useEffect} from 'react';
import { Menu } from '../Menu/Menu';
import { Advertising } from '../Advertising/Advertising';
import { setCategoriesId, setSortType, setPageCount } from '../../app/slices/filterSlice';

import '../../scss/app.scss';

import { Pizza } from '../Pizza/Pizza';


import { Search } from '../Search/Search';

import {BasicPagination} from '../Pagination/Pagination';
import { motion } from 'framer-motion';
// import { SearchCTX } from '../Context/SearchContext';
// import { useDispatch, useSelector } from 'react-redux';
// import { Modal } from '../Modal/Modal';
// import { Sushi } from '../Sushi/Sushi';
// import { Snacks } from '../Snacks/Snacks';

// import { Deserts } from '../Deserts/Deserts';

// import { Drinks } from '../Drinks/Drinks';

// import { Sauces } from '../Sauces/Sauces';
// import { Kombo } from '../Kombo/Kombo';
import { fetchPizza } from '../../app/slices/pizza';
import { RootState, useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';

export const Home = () => {
  const searchValue = useSelector((state: RootState) => state.filter.searchValue) 
  

  const sortType = useSelector((state: RootState) => state.filter.sort);

  const dispatch = useAppDispatch();
  // state comes from redux

  const categoryId = useSelector((state: RootState) => state.filter.categoriesId);

  function isSort(obj: any) {
    dispatch(setSortType(obj));
   
    
  }

  function isCategory(index: number) {
    dispatch(setCategoriesId(index));
  }

  // //sushi
  // const [sushi, setSushi] = React.useState([]);
  // // snacks
  // const [snacks, setSnacks] = React.useState([]);
  // // deserts
  // const [deserts, setDeserts] = React.useState([]);

  // // drinks
  // const [drinks, setDrinks] = React.useState([]);
  // // sauces
  // const [sauces, setSauces] = React.useState([]);
  // // kombo
  // const [kombo, setKombo] = React.useState([]);

  const [modal, setModal] = React.useState<boolean>(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent, value: number) => {
    dispatch(setPageCount(value));
   
    
  };
  // sort of price, title and popularity

  const {pizza, status} = useSelector((state: RootState) => state.pizza);

  // const [pizza, setPizza] = React.useState([]);

  const page = useSelector((state: RootState) => state.filter.page);

  const fetchData = async () => {
  
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    // others
    // const response2 = await axios.get('https://653b46222e42fd0d54d4df25.mockapi.io/items');
    // dispatch(
  
      
      dispatch(
        fetchPizza({
          order,
          sortBy,
          search,
          page,
          categoryId,
        }),
      );
 
   
   

    // setSushi(response2.data[0]?.sushi);
    // setSnacks(response2.data[0]?.snacks);
    // setDeserts(response2.data[0]?.deserts);
    // setDrinks(response2.data[0]?.drinks);
    // setSauces(response2.data[0]?.sauces);
    // setKombo(response2.data[0]?.kombo);
  };

  // window.scrollTo(0, 0);

  useEffect(() => {
    fetchData();
  }, [categoryId, sortType, searchValue, page]);

  return (
    <motion.div
      className="w-[80%] m-auto pb-[50px]"
      initial={{ width: 0 }}
      animate={{ width: '80%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <Menu />

      <Advertising />
      <Search />

      <Pizza
        // categoryId={categoryId}
        isCategory={isCategory}
        arr={pizza}
        status = {status}
        isSort={isSort}
        openModal={openModal}
        modal={modal}
        closeModal={closeModal}
      />

      {/* <Sushi arr={sushi} isLoading={isLoading} />

      <Snacks arr={snacks} isLoading={isLoading} />

      <Deserts arr={deserts} isLoading={isLoading} />

      <Drinks arr={drinks} isLoading={isLoading} />

      <Sauces arr={sauces} isLoading={isLoading} />

      <Kombo arr={kombo} isLoading={isLoading} />  */}
      <BasicPagination currentPage={page} handleChangePage={handleChange} />
    </motion.div>
  );
};
