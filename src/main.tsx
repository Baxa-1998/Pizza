

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material';
import {store} from './app/store'


const theme: any = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
    },
  },
});




import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
  


    <Provider store={store}>
    <ThemeProvider theme={theme}>
         <App />
         </ThemeProvider>
    </Provider>
 

 
    </BrowserRouter>

  </React.StrictMode>,
)

// import ReactDOM from 'react-dom/client';


// import { BrowserRouter } from 'react-router-dom';

// import {store} from './app/store'
// import { ThemeProvider, createTheme } from '@mui/material';

// import { Provider } from 'react-redux';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ff5722',
//     },
//   },
// });

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// root.render(
 
//     {/* на все приложение включаем роутер */}
//     <BrowserRouter>
    
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
          
//         </ThemeProvider>
//       </Provider>
//     </BrowserRouter>

// );
