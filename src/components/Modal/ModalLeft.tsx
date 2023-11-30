
import style from './Modal.module.scss';
import { useSelector } from 'react-redux';





// type imgProps = {
//   imageUrl?: string;
// }

export const ModalLeft = () => {
  const imageUrl = useSelector((state: any)=> state.info.info)  
  return (
    <div className={style.modalLeft}>

       
          <div className={style.bigSize}>
             <img className='rounded-[50%]' src={imageUrl.imageUrl} alt="" /> 
          </div>
          <div className={style.mediumSize}>
          <img className='rounded-[50%]' src={imageUrl.imageUrl} alt="" /> 
          </div>
          <div className={style.smallSize}>
          <img className='rounded-[50%]' src={imageUrl.imageUrl} alt="" /> 
          </div>
         
        
      
              
     
  
    </div>
  );
};
