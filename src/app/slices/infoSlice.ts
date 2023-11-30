import { createSlice } from '@reduxjs/toolkit';


type Ingredients = {
  id: number; 
  title: string; 
  img: string;
  price: number;
  active: boolean
}

type TInfo = {
  id: number | null;
  imageUrl?: string;
  title: string;
  type: number[];
  size: number[];
  ingredient: Ingredients[]
}

interface TInfoSlice  { 
  typesIndex: string[]; 
  info: TInfo[];
  activeTypeState: number 
  activeSizeState: number 

}


const initialState : TInfoSlice = {
  typesIndex: [' тонкое ', ' традиционное'],
  info: [{ id: null, imageUrl: '', title: '', type: [], size: [], ingredient: []}],

  activeSizeState: 0,
  activeTypeState: 0,
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setInfo(state, action) {
      state.info = action.payload;
      
    }, 
   

    setActiveSizeState(state, action) {
      state.activeSizeState = action.payload;
    },
    setActiveTypeState(state, action) {
      console.log(action);
      state.activeTypeState = action.payload;
    },
 

  },
});

export const { setInfo, setActiveSizeState, setActiveTypeState,} = infoSlice.actions;
// export const lastPrice = (state) => state.info.price
export default infoSlice.reducer;
