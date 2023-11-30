import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice'; 
import info from './slices/infoSlice'
import cart from './slices/cartSlice' 
import pizza from './slices/pizza'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter, 
    info,
    cart,  
    pizza

    
    
  },
});


export type RootState = ReturnType<typeof store.getState>


type AppDispatch = typeof store.dispatch   
export const useAppDispatch = () => useDispatch<AppDispatch>();
