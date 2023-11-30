import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';



// типизация обьекта из массива
type Ingredients = {
  id: number; 
  title: string; 
  img: string;
  price: number;
  active: boolean
}
// id(pin):1
// title(pin):"сырный тортик"
// img(pin):"https://dodopizza-a.akamaihd.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png"
// price(pin):179
// active(pin):true

export type CartItems = { 
  id : number; 
  title : string;
  imageUrl: string;
  size: number[];
  type: string,
  price: number;
   count: number;
  ingredient: Ingredients[]; // массив с обьектами


}





interface CartSliceTypes{
  totalPrice: number; 
  items: CartItems[];
  price: number;
  ingredients: Ingredients[]
 
}


const initialState : CartSliceTypes = {
  totalPrice: 0,
  items: [],
  price: 0,
  ingredients: []
 
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
    setIngredients(state, action) {
      state.ingredients = action.payload;
    },

    onAddIngredients(state, action) {
      const selectedId = state.ingredients.find((obj) => obj.id === action.payload);

      if (selectedId) {
        if (selectedId.active) {
          state.price = state.price - selectedId.price;

          selectedId.active = false;
        } else {
          state.price = selectedId.price + state.price;
          selectedId.active = true;
        }
      }
    },

    setItem(state, action: PayloadAction<CartItems>) {
    
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        // const compareIngredient = new Set(findItem.ingredient).size !== findItem.ingredient;
        // if (compareIngredient) {
        //   console.log('повтор');
        // } else {
        //   console.log('не повтор');
        // }

        findItem.count++;
      
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.totalPrice + state.price;
    },

    // onAddIngredients (state,action){

    // },

    onMinus(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        // const includeIngredients = findItem.ingredient.reduce((acc, item) => acc + item.price, 0);

        findItem.count--;
        state.totalPrice = state.totalPrice - findItem.price;
        // if(includeIngredients){
        //   state.totalPrice = state.totalPrice - includeIngredients
        // }
      }
    },
    onPlus(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
        state.totalPrice = state.totalPrice + findItem.price;
      }
    },

    setRemove(state, action: PayloadAction<number>) {
      const findItem = state.items.find((obj) => obj.id === action.payload); 
      if(findItem){
        state.totalPrice = state.totalPrice - findItem.price
        
      }

      state.items = state.items.filter((obj) => obj.id !== action.payload); 
    
    
      
      
     
      
     
    },
    setClear(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    addToCart(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        state.totalPrice = state.totalPrice + state.price;
      }
    },
  },
});

// Импортируем типы из глобального store 
export const selectCart = (state: RootState) => state.cart
export const {
  setRemove,
  setItem,
  setClear,
  onMinus,
  onAddIngredients,
  setPrice,
  setIngredients,
  addToCart,
  onPlus,
} = cartSlice.actions;
export default cartSlice.reducer;
