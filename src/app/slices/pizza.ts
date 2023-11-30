import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'; 
import axios from 'axios';






type Ingredients = {
  id: number; 
  title: string; 
  img: string;
  price: number;
  active: boolean
}
type PizzaItems = { 
  id: number;
  imageUrl: string;
  title: string; 
  types: number[];
  sizes: number[];
  price: number;
  category:number;
  rating: number;
 
   ingredients: Ingredients[];

  // ingredient: Ingredients[]; // массив с обьектами


}

export enum Status {
  LOADING = 'loading',
  ERROR = 'error',
  SUCCESS = 'success' 
}


interface PizzaSlice {
  pizza: PizzaItems[];
  status: Status
}


const initialState: PizzaSlice = { 
  // массив с пиццами
  pizza: [],  
  // Статус запроса
  status : Status.LOADING
};

// type TFetchPizzaParams = {
//   order: string;
//   sortBy: string;
//   search: string;
//   page:number;
//   cat
// }
type TSearchPizzaParams ={ 
  sortBy: string; order: string; categoryId: number; search: string; page: number;
}

export const fetchPizza = createAsyncThunk<PizzaItems[], TSearchPizzaParams> ('pizza/fetchPizzaId', async (params) => {  
  // получаем параметры из dispatch fetchPizza
  const {  order, sortBy, search, page, categoryId}  = params 
  const { data } = await axios.get(
    `https://653b46222e42fd0d54d4df25.mockapi.io/pizz?page=${page}&limit=8&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortBy}&order=${order}${search}`, 
    
  );
  return data;
});

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizza(state, action: PayloadAction<PizzaItems[]>) {
      state.pizza = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.pending, (state)=>{
      state.status = Status.LOADING
      state.pizza = []
    }); 

    builder.addCase(fetchPizza.fulfilled, (state, action)=>{
      state.pizza = action.payload
      state.status = Status.SUCCESS
    
    });

    builder.addCase(fetchPizza.rejected, (state)=>{
      state.status =  Status.ERROR
      state.pizza = []
    })
  }
  
});

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
