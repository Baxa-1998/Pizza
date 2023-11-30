

import './scss/app.scss';
import React, { useEffect } from 'react';
import './index.css';
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes';



function App() {
  const [headerShow, setHeaderShow] = React.useState<boolean>(false);
 
  


  // handle of header visibility
  useEffect(() => {
    function handleVisible() {
      if (window.scrollY > 10) {
        setHeaderShow(true);
      } else {
        setHeaderShow(false);
      }
    }
    window.addEventListener('scroll', handleVisible);
    return () => window.removeEventListener('scroll', handleVisible);
  }, [headerShow]);

  return (
    <>
     
     
          <AnimatedRoutes
        
            headerShow={headerShow}
          />
      
   
    </>
  );
}

export default App;
