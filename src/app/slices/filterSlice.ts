import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type SortType = {
  name: string; 
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price'

}

interface FilterSlice {
  searchValue: string,
  categoriesId: number,
  page: number,
  sort: SortType; 
  
}

const initialState : FilterSlice = {
  searchValue: '',
  categoriesId: 0,
  page: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setCategoriesId(state, action: PayloadAction<number>) {
      state.categoriesId = action.payload;
    },
    setSortType(state, action:PayloadAction<SortType>) {
      state.sort = action.payload;
    }, 
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});




export const { setCategoriesId, setSortType, setPageCount, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
