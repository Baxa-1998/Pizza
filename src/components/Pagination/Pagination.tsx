import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import style from './Pagination.module.scss';



type PaginationTypes = {
  handleChangePage: (event:React.ChangeEvent<any>, value: number) => void;
  currentPage: number;
}






export const  BasicPagination:React.FC<PaginationTypes> =({ handleChangePage, currentPage }) => {


 
  

  return (
    <Stack spacing={2}>
      <Pagination className={style.wrapper} count={3} color="primary" page={currentPage} onChange={handleChangePage} />
    </Stack>
  );
}
